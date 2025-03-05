/**
 * Esta librería proporciona funciones para manejar conexiones y peticiones.
 */

// Tipo genérico para gestionar respuestas de API
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode?: number;
}

/**
 * Función genérica para realizar peticiones a APIs
 * @param url URL de la petición
 * @param options Opciones de la petición (método, headers, body)
 * @returns ApiResponse con los datos o el error
 */
export async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const statusCode = response.status;

    // Intentar parsear la respuesta como JSON
    let data;
    try {
      data = await response.json();
    } catch (e) {
      // Si no puede ser parseado como JSON, usar texto
      data = await response.text();
    }

    // Comprobar si la respuesta es exitosa
    if (response.ok) {
      return {
        success: true,
        data: data as T,
        statusCode,
      };
    } else {
      // Respuesta de error HTTP
      return {
        success: false,
        error: data?.error || data?.message || `Error ${statusCode}`,
        statusCode,
      };
    }
  } catch (error) {
    // Error de conexión o de red
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Función para establecer conexión con un servicio externo
 * @param endpoint URL del servicio
 * @returns Objeto con métodos para interactuar con el servicio
 */
export function connect(endpoint: string) {
  return {
    /**
     * Realiza una petición GET
     * @param path Ruta a consultar
     * @param options Opciones adicionales
     */
    async get<T>(path: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
      return request<T>(`${endpoint}${path}`, { 
        method: 'GET',
        ...options
      });
    },

    /**
     * Realiza una petición POST
     * @param path Ruta a la que enviar datos
     * @param data Datos a enviar
     * @param options Opciones adicionales
     */
    async post<T, U = unknown>(
      path: string, 
      data: U, 
      options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
      return request<T>(`${endpoint}${path}`, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options
      });
    },

    /**
     * Realiza una petición PUT
     * @param path Ruta a actualizar
     * @param data Datos a enviar
     * @param options Opciones adicionales
     */
    async put<T, U = unknown>(
      path: string,
      data: U,
      options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
      return request<T>(`${endpoint}${path}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        ...options
      });
    },

    /**
     * Realiza una petición DELETE
     * @param path Ruta a eliminar
     * @param options Opciones adicionales
     */
    async delete<T>(path: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
      return request<T>(`${endpoint}${path}`, {
        method: 'DELETE',
        ...options
      });
    }
  };
}
