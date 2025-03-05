/**
 * Utility functions for the FLAG System
 */

/**
 * Truncate a string to a specific length and add ellipsis
 */
export function truncateString(str: string, maxLength: number = 30): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Converts a string to uppercase and removes non-alphanumeric characters
 */
export function normalizeInput(input: string): string {
  return input.toUpperCase().replace(/[^A-Z]/g, '');
}

/**
 * Checks if the given string contains only letters A-Z
 */
export function isValidAlphabeticString(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

/**
 * Splits the string into chunks of specified size
 */
export function chunkString(str: string, chunkSize: number): string[] {
  const chunks = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.substring(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Generates a random alphanumeric string of specified length
 */
export function generateRandomWord(length: number = 5): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Debounce function to limit the rate at which a function can fire
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<T>): void {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
