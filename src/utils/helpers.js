/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * Helper Utilities
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Generic reusable helper functions.
 *
 * These functions should remain:
 *
 * • Pure
 * • Framework agnostic
 * • Side-effect free
 *
 * Do NOT place:
 * - API calls
 * - React Hooks
 * - Business logic
 * - DOM manipulation
 * ------------------------------------------------------------
 */

/**
 * Check if a value is null or undefined.
 */
export const isNil = (value) => value === null || value === undefined;

/**
 * Check if a value is empty.
 */
export const isEmpty = (value) => {
  if (isNil(value)) return true;

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
};

/**
 * Capitalize first letter.
 */
export const capitalize = (value = "") => {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * Convert string to Title Case.
 */
export const toTitleCase = (value = "") => {
  return value.toLowerCase().split(" ").map(capitalize).join(" ");
};

/**
 * Generate random ID.
 */
export const generateId = () => {
  return crypto.randomUUID();
};

/**
 * Delay execution.
 */
export const sleep = (milliseconds = 1000) =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });

/**
 * Deep clone object.
 */
export const deepClone = (value) => {
  return structuredClone(value);
};

/**
 * Remove duplicate objects by key.
 */
export const uniqueBy = (array = [], key) => {
  return [...new Map(array.map((item) => [item[key], item])).values()];
};

/**
 * Group array by object property.
 */
export const groupBy = (array = [], key) => {
  return array.reduce((groups, item) => {
    const group = item[key];

    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(item);

    return groups;
  }, {});
};

/**
 * Sort array by object property.
 */
export const sortBy = (array = [], key, direction = "asc") => {
  const sorted = [...array].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });

  return direction === "desc" ? sorted.reverse() : sorted;
};

/**
 * Convert object to query string.
 */
export const objectToQueryString = (params = {}) => {
  return new URLSearchParams(params).toString();
};

/**
 * No Operation function.
 */
export const noop = () => {};
