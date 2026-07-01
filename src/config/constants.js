/**
 * ============================================================
 * SyncWare Storefront Engine
 * Global Constants
 * ============================================================
 *
 * Purpose:
 * Centralized application constants.
 *
 * Rules:
 * - Never hardcode reusable values.
 * - Group constants by domain.
 * - No business logic.
 * - No environment variables.
 * ============================================================
 */

/* ============================================================
 * Application
 * ============================================================ */

export const APP = Object.freeze({
  NAME: "SyncWare Storefront",
  VERSION: "1.0.0",
});

/* ============================================================
 * Routes
 * ============================================================ */

export const ROUTES = Object.freeze({
  HOME: "/",
  PRODUCTS: "/products",
  COLLECTIONS: "/collections",
  OFFERS: "/offers",
  ABOUT: "/about",
  CONTACT: "/contact",
  NOT_FOUND: "*",
});

/* ============================================================
 * Local Storage Keys
 * ============================================================ */

export const STORAGE_KEYS = Object.freeze({
  TOKEN: "syncware_token",
  REFRESH_TOKEN: "syncware_refresh_token",

  BUSINESS: "syncware_business",

  THEME: "syncware_theme",

  LANGUAGE: "syncware_language",

  CART: "syncware_cart",

  RECENT_SEARCHES: "syncware_recent_searches",
});

/* ============================================================
 * API
 * ============================================================ */

export const API = Object.freeze({
  TIMEOUT: 30000,
  RETRY_COUNT: 2,
});

/* ============================================================
 * Pagination
 * ============================================================ */

export const PAGINATION = Object.freeze({
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
});

/* ============================================================
 * Currency
 * ============================================================ */

export const CURRENCY = Object.freeze({
  DEFAULT: "INR",
  LOCALE: "en-IN",
});

/* ============================================================
 * Languages
 * ============================================================ */

export const LANGUAGES = Object.freeze(["en", "hi"]);

/* ============================================================
 * Themes
 * ============================================================ */

export const THEMES = Object.freeze({
  DEFAULT: "default",
  LIGHT: "light",
  DARK: "dark",
});

/* ============================================================
 * Business Types
 * ============================================================ */

export const BUSINESS_TYPES = Object.freeze({
  GARMENTS: "garments",
  MOBILE: "mobile",
  PHARMACY: "pharmacy",
  FURNITURE: "furniture",
  ELECTRONICS: "electronics",
  GROCERY: "grocery",
  JEWELLERY: "jewellery",
  RESTAURANT: "restaurant",
  SUPERMARKET: "supermarket",
});

/* ============================================================
 * Product Status
 * ============================================================ */

export const PRODUCT_STATUS = Object.freeze({
  ACTIVE: "active",
  INACTIVE: "inactive",
  OUT_OF_STOCK: "out_of_stock",
});

/* ============================================================
 * Order Status
 * ============================================================ */

export const ORDER_STATUS = Object.freeze({
  PENDING: "pending",
  CONFIRMED: "confirmed",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
});

/* ============================================================
 * HTTP Status
 * ============================================================ */

export const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,

  INTERNAL_SERVER_ERROR: 500,
});

/* ============================================================
 * Animation
 * ============================================================ */

export const ANIMATION = Object.freeze({
  FAST: 0.2,
  NORMAL: 0.35,
  SLOW: 0.6,
});

/* ============================================================
 * Breakpoints
 * ============================================================ */

export const BREAKPOINTS = Object.freeze({
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
});

/* ============================================================
 * Validation
 * ============================================================ */

export const VALIDATION = Object.freeze({
  PHONE_LENGTH: 10,

  OTP_LENGTH: 6,

  PASSWORD_MIN_LENGTH: 8,

  SEARCH_MIN_LENGTH: 2,
});

/* ============================================================
 * Regular Expressions
 * ============================================================ */

export const REGEX = Object.freeze({
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  PHONE: /^[6-9]\d{9}$/,

  PINCODE: /^[1-9][0-9]{5}$/,

  GST: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/,
});
