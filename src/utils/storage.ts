/**
 * Utility functions for managing localStorage with expiration times
 * 
 * These functions provide a simple caching mechanism for storing data in localStorage
 * with automatic expiration handling. Useful for caching API responses or other
 * temporary data to reduce network requests and improve performance.
 */

/**
 * Stores data in localStorage with an expiration time
 * 
 * @param {string} key - The localStorage key to store the data under
 * @param {any} value - The data to store (will be JSON stringified)
 * @param {number} ttl - Time to live in milliseconds before the data expires
 * 
 * @example
 * // Cache data for 1 hour (3600000ms)
 * setWithExpiry('user-data', { name: 'John' }, 3600000);
 */
export const setWithExpiry = (key: string, value: any, ttl: number): void => {
    const now = new Date();

    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));
};

/**
 * Retrieves data from localStorage and checks if it has expired
 * 
 * If the data has expired, it will be automatically removed from localStorage
 * and null will be returned.
 * 
 * @param {string} key - The localStorage key to retrieve data from
 * @returns {any|null} The stored value if it exists and hasn't expired, null otherwise
 * 
 * @example
 * const userData = getWithExpiry('user-data');
 * if (userData) {
 *   console.log('Data is still valid:', userData);
 * } else {
 *   console.log('Data expired or not found');
 * }
 */
export const getWithExpiry = (key: string): any | null => {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
};
