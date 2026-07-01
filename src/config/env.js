/**
 * ============================================================
 * SyncWare Storefront Engine
 * Environment Configuration
 * ============================================================
 *
 * Single source of truth for all environment variables.
 *
 * Never use import.meta.env anywhere else in the project.
 * Always import ENV from this file.
 *
 * Example:
 *
 * import ENV from "@/config/env";
 *
 * console.log(ENV.API_BASE_URL);
 *
 * ============================================================
 */

const ENV = Object.freeze({
  /**
   * ------------------------------------------------------------
   * Application
   * ------------------------------------------------------------
   */
  APP_NAME: import.meta.env.VITE_APP_NAME || "SyncWare Storefront",

  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",

  APP_DESCRIPTION:
    import.meta.env.VITE_APP_DESCRIPTION || "Multi-Tenant Storefront Engine",

  /**
   * ------------------------------------------------------------
   * Environment
   * ------------------------------------------------------------
   */
  MODE: import.meta.env.MODE,

  NODE_ENV: import.meta.env.MODE,

  IS_DEVELOPMENT: import.meta.env.DEV,

  IS_PRODUCTION: import.meta.env.PROD,

  /**
   * ------------------------------------------------------------
   * API
   * ------------------------------------------------------------
   */
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",

  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT || 30000),

  /**
   * ------------------------------------------------------------
   * Assets
   * ------------------------------------------------------------
   */
  ASSETS_BASE_URL: import.meta.env.VITE_ASSETS_BASE_URL || "",

  CDN_BASE_URL: import.meta.env.VITE_CDN_BASE_URL || "",

  /**
   * ------------------------------------------------------------
   * Storefront Defaults
   * ------------------------------------------------------------
   */
  DEFAULT_TENANT: import.meta.env.VITE_DEFAULT_TENANT || "default",

  DEFAULT_THEME: import.meta.env.VITE_DEFAULT_THEME || "default",

  DEFAULT_LANGUAGE: import.meta.env.VITE_DEFAULT_LANGUAGE || "en",

  DEFAULT_CURRENCY: import.meta.env.VITE_DEFAULT_CURRENCY || "INR",

  /**
   * ------------------------------------------------------------
   * Feature Flags
   * ------------------------------------------------------------
   */
  ENABLE_DEBUG: import.meta.env.VITE_ENABLE_DEBUG === "true",

  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === "true",

  ENABLE_PWA: import.meta.env.VITE_ENABLE_PWA === "true",

  ENABLE_MOCK_API: import.meta.env.VITE_ENABLE_MOCK_API === "true",
});

export default ENV;
