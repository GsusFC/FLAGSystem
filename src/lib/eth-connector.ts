/**
 * Biblioteca para manejar conexiones Ethereum y resolver problemas con RPC
 */

// Tipos para las respuestas y solicitudes Ethereum
export interface EthereumRequestPayload {
  method: string;
  params?: unknown[]; // Simplified to match window.ethereum expected type
}

export interface EthereumResponse<T = unknown> {
  result?: T;
  error?: {
    code?: number;
    message?: string;
    data?: unknown;
  };
}

export interface EthProviderRpcError extends Error {
  code: number;
  data?: unknown;
}

/**
 * Envía solicitudes RPC seguras al proveedor Ethereum actual
 * Maneja problemas de conexión y respuestas incorrectas
 */
export async function safeRequest<T = unknown>(
  payload: EthereumRequestPayload, 
  timeout = 10000
): Promise<EthereumResponse<T>> {
  // Verificar si window y ethereum existen
  if (typeof window === 'undefined' || !window.ethereum) {
    return {
      error: {
        code: -32603,
        message: 'Ethereum provider not available',
      },
    };
  }

  try {
    // Implementación con timeout para evitar bloqueos
    const timeoutPromise = new Promise<EthereumResponse<T>>((_, reject) => {
      setTimeout(() => {
        reject(new Error('RPC request timeout'));
      }, timeout);
    });

    // Solicitud real a Ethereum
    const requestPromise = new Promise<EthereumResponse<T>>((resolve) => {
      window.ethereum!
        .request(payload as { method: string; params?: unknown[] })
        .then((result) => {
          resolve({ result: result as T });
        })
        .catch((error: EthProviderRpcError) => {
          // Garantizamos que error siempre tenga una estructura válida
          resolve({
            error: {
              code: error?.code || -1,
              message: error?.message || 'Unknown error',
              data: error?.data,
            },
          });
        });
    });

    // Retornamos lo que termine primero: la solicitud exitosa o el timeout
    return await Promise.race([requestPromise, timeoutPromise]);
  } catch (error) {
    // Capturamos cualquier otro error no manejado
    return {
      error: {
        code: -32603,
        message: error instanceof Error ? error.message : 'Unknown error',
      },
    };
  }
}

/**
 * Interfaz simplificada para interactuar con Ethereum
 */
export const ethClient = {
  /**
   * Obtiene las cuentas Ethereum conectadas
   * @returns Array de direcciones o error
   */
  async getAccounts(): Promise<{ accounts: string[]; error?: string }> {
    const response = await safeRequest<string[]>({ method: 'eth_accounts' });
    
    // Siempre devolvemos un objeto consistente aunque haya error
    return {
      accounts: response.result || [],
      ...(response.error ? { error: response.error.message } : {}),
    };
  },

  /**
   * Verifica si el usuario está autorizado para interactuar
   */
  async isAuthorized(): Promise<boolean> {
    const { accounts, error } = await this.getAccounts();
    
    // Si hay error o no hay cuentas, consideramos que no está autorizado
    if (error || accounts.length === 0) {
      return false;
    }
    
    return true;
  },

  /**
   * Solicita conectar la wallet
   */
  async requestAccounts(): Promise<{ accounts: string[]; error?: string }> {
    const response = await safeRequest<string[]>({ 
      method: 'eth_requestAccounts' 
    });
    
    return {
      accounts: response.result || [],
      ...(response.error ? { error: response.error.message } : {}),
    };
  },

  /**
   * Obtiene la red actual
   */
  async getChainId(): Promise<{ chainId: string; error?: string }> {
    const response = await safeRequest<string>({ method: 'eth_chainId' });
    
    return {
      chainId: response.result || '0x1',
      ...(response.error ? { error: response.error.message } : {}),
    };
  },

  /**
   * Solicita cambiar la red
   */
  async switchChain(chainId: string): Promise<{ success: boolean; error?: string }> {
    const response = await safeRequest({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId }],
    });
    
    return {
      success: !response.error,
      ...(response.error ? { error: response.error.message } : {}),
    };
  }
};

// Declaraciones para TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener: (event: string, callback: (...args: unknown[]) => void) => void;
    };
  }
}

// Exportar una función que detecta si hay proveedor de Ethereum
export function hasEthereumProvider(): boolean {
  return typeof window !== 'undefined' && !!window.ethereum;
}
