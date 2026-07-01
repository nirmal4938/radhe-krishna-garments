/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * Formatter Utilities
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Format values for display.
 *
 * Examples:
 * - Dates
 * - Time
 * - Numbers
 * - Strings
 * - Phone Numbers
 *
 * This file should NEVER contain:
 * - Business Logic
 * - API Calls
 * - React Code
 * ------------------------------------------------------------
 */

/**
 * Format Date
 *
 * Example:
 * 2026-07-01
 * →
 * Jul 01, 2026
 */
export const formatDate = (value, locale = "en-IN") => {
  if (!value) return "";

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(value));
};

/**
 * Format Date & Time
 *
 * Example:
 * Jul 01, 2026, 10:45 AM
 */
export const formatDateTime = (value, locale = "en-IN") => {
  if (!value) return "";

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
};

/**
 * Format Time
 *
 * Example:
 * 10:45 AM
 */
export const formatTime = (value, locale = "en-IN") => {
  if (!value) return "";

  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
};

/**
 * Format Number
 *
 * Example:
 * 125000
 * →
 * 1,25,000
 */
export const formatNumber = (value, locale = "en-IN") => {
  if (value === null || value === undefined) {
    return "";
  }

  return new Intl.NumberFormat(locale).format(value);
};

/**
 * Format Percentage
 *
 * Example:
 * 15
 * →
 * 15%
 */
export const formatPercentage = (value) => {
  if (value === null || value === undefined) {
    return "";
  }

  return `${value}%`;
};

/**
 * Format Phone Number
 *
 * Example:
 * 9876543210
 * →
 * +91 98765 43210
 */
export const formatPhone = (phone = "") => {
  const digits = phone.replace(/\D/g, "");

  if (digits.length !== 10) {
    return phone;
  }

  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
};

/**
 * Format Name
 *
 * Example:
 * raj mobile point
 * →
 * Raj Mobile Point
 */
export const formatName = (value = "") => {
  return value
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Truncate Text
 *
 * Example:
 * Hello World...
 */
export const truncate = (text = "", length = 100) => {
  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
};

export default {
  formatDate,
  formatDateTime,
  formatTime,
  formatNumber,
  formatPercentage,
  formatPhone,
  formatName,
  truncate,
};
