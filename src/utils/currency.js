/**
 * ============================================================
 * SyncWare Storefront Engine
 * Currency Utilities
 * ============================================================
 */

/**
 * Format currency using Intl.NumberFormat
 *
 * @param {number} amount
 * @param {string} currency
 * @param {string} locale
 * @returns {string}
 */
export const formatCurrency = (
  amount = 0,
  currency = "INR",
  locale = "en-IN",
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(Number(amount));
};

/**
 * Format Indian Rupee
 *
 * Example:
 * ₹25,000
 */
export const formatINR = (amount = 0) => {
  return formatCurrency(amount, "INR", "en-IN");
};

/**
 * Remove currency formatting
 *
 * "₹25,000" -> 25000
 */
export const parseCurrency = (value = "") => {
  return Number(String(value).replace(/[^\d.-]/g, ""));
};

/**
 * Convert paisa to rupees
 *
 * 1299 -> 12.99
 */
export const paisaToRupee = (paisa = 0) => {
  return Number(paisa) / 100;
};

/**
 * Convert rupees to paisa
 *
 * 12.99 -> 1299
 */
export const rupeeToPaisa = (rupee = 0) => {
  return Math.round(Number(rupee) * 100);
};

/**
 * Calculate discount percentage
 *
 * Example:
 * MRP 2000
 * Sale 1500
 * Result 25
 */
export const calculateDiscountPercentage = (
  originalPrice = 0,
  salePrice = 0,
) => {
  if (!originalPrice || salePrice >= originalPrice) return 0;

  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

/**
 * Calculate discounted price
 *
 * Example:
 * 2000
 * 20%
 * => 1600
 */
export const calculateDiscountedPrice = (originalPrice = 0, discount = 0) => {
  return originalPrice - (originalPrice * discount) / 100;
};

/**
 * Format compact price
 *
 * 1200 -> ₹1.2K
 * 250000 -> ₹2.5L
 */
export const formatCompactCurrency = (amount = 0) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(amount);
};
