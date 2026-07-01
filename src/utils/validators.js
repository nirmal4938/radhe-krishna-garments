/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * Validation Utilities
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Generic validation helper functions.
 *
 * These validators are reusable across:
 *
 * - Forms
 * - Services
 * - Components
 * - API payload validation
 *
 * No React.
 * No API calls.
 * No UI logic.
 * ------------------------------------------------------------
 */

/**
 * Check if value exists.
 */
export const required = (value) => {
  if (value === null || value === undefined) {
    return false;
  }

  return String(value).trim().length > 0;
};

/**
 * Validate email.
 */
export const isEmail = (email = "") => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email.trim());
};

/**
 * Validate Indian mobile number.
 */
export const isPhone = (phone = "") => {
  const regex = /^[6-9]\d{9}$/;

  return regex.test(phone.trim());
};

/**
 * Validate URL.
 */
export const isUrl = (url = "") => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate number.
 */
export const isNumber = (value) => {
  return !Number.isNaN(Number(value));
};

/**
 * Validate positive number.
 */
export const isPositiveNumber = (value) => {
  return isNumber(value) && Number(value) > 0;
};

/**
 * Minimum length.
 */
export const minLength = (value = "", length = 0) => {
  return value.trim().length >= length;
};

/**
 * Maximum length.
 */
export const maxLength = (value = "", length = Infinity) => {
  return value.trim().length <= length;
};

/**
 * Exact length.
 */
export const exactLength = (value = "", length = 0) => {
  return value.trim().length === length;
};

/**
 * Validate password.
 *
 * Minimum:
 * - 8 characters
 * - One uppercase
 * - One lowercase
 * - One number
 */
export const isStrongPassword = (password = "") => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  return regex.test(password);
};

/**
 * Check if two values match.
 */
export const matches = (value, compareValue) => {
  return value === compareValue;
};

/**
 * Check numeric range.
 */
export const inRange = (value, min, max) => {
  const number = Number(value);

  return number >= min && number <= max;
};

export default {
  required,
  isEmail,
  isPhone,
  isUrl,
  isNumber,
  isPositiveNumber,
  minLength,
  maxLength,
  exactLength,
  isStrongPassword,
  matches,
  inRange,
};
