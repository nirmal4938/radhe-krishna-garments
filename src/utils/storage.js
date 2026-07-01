/**
 * ============================================================
 * SyncWare Storefront Engine
 * Storage Utilities
 * ============================================================
 */

/**
 * Save data to localStorage
 *
 * @param {string} key
 * @param {*} value
 */
export const setStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Storage Write Error:", error);
    return false;
  }
};

/**
 * Read data from localStorage
 *
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*}
 */
export const getStorage = (key, defaultValue = null) => {
  try {
    const value = localStorage.getItem(key);

    if (value === null) {
      return defaultValue;
    }

    return JSON.parse(value);
  } catch (error) {
    console.error("Storage Read Error:", error);
    return defaultValue;
  }
};

/**
 * Remove a key
 *
 * @param {string} key
 */
export const removeStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("Storage Remove Error:", error);
    return false;
  }
};

/**
 * Clear all localStorage
 */
export const clearStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error("Storage Clear Error:", error);
    return false;
  }
};

/**
 * Check whether a key exists
 *
 * @param {string} key
 * @returns {boolean}
 */
export const hasStorage = (key) => {
  return localStorage.getItem(key) !== null;
};

/**
 * Get all storage keys
 *
 * @returns {string[]}
 */
export const getStorageKeys = () => {
  return Object.keys(localStorage);
};

/**
 * Storage namespace helper
 *
 * Example:
 * syncware.business
 */
export const createStorageKey = (...parts) => {
  return parts.filter(Boolean).join(".");
};

/**
 * Save with expiration
 *
 * @param {string} key
 * @param {*} value
 * @param {number} ttl Time-to-live in milliseconds
 */
export const setStorageWithExpiry = (key, value, ttl) => {
  const expiresAt = Date.now() + ttl;

  return setStorage(key, {
    value,
    expiresAt,
  });
};

/**
 * Read with expiration
 *
 * Returns null if expired.
 */
export const getStorageWithExpiry = (key) => {
  const item = getStorage(key);

  if (!item) return null;

  if (!item.expiresAt) {
    return item.value ?? item;
  }

  if (Date.now() > item.expiresAt) {
    removeStorage(key);
    return null;
  }

  return item.value;
};
