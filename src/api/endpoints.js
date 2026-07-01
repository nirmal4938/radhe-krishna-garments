/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * API Endpoints
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Central registry for every backend endpoint.
 *
 * Services should NEVER hardcode API URLs.
 *
 * Example:
 *
 * ❌ api.get("/products")
 *
 * ✅ api.get(ENDPOINTS.PRODUCTS.LIST)
 *
 * Future:
 * Supports API versioning and endpoint refactoring
 * from one place.
 * ------------------------------------------------------------
 */

export const ENDPOINTS = {
  /**
   * ----------------------------------------------------------
   * Health
   * ----------------------------------------------------------
   */
  HEALTH: "/health",

  /**
   * ----------------------------------------------------------
   * Storefront Bootstrap
   * ----------------------------------------------------------
   */
  STORE: {
    BOOTSTRAP: "/storefront/bootstrap",
  },

  /**
   * ----------------------------------------------------------
   * Business
   * ----------------------------------------------------------
   */
  BUSINESS: {
    DETAILS: "/business",
  },

  /**
   * ----------------------------------------------------------
   * Home Page
   * ----------------------------------------------------------
   */
  HOME: {
    CONTENT: "/home",
  },

  /**
   * ----------------------------------------------------------
   * Products
   * ----------------------------------------------------------
   */
  PRODUCTS: {
    LIST: "/products",
    DETAILS: (id) => `/products/${id}`,
    FEATURED: "/products/featured",
    SEARCH: "/products/search",
  },

  /**
   * ----------------------------------------------------------
   * Collections
   * ----------------------------------------------------------
   */
  COLLECTIONS: {
    LIST: "/collections",
    DETAILS: (slug) => `/collections/${slug}`,
  },

  /**
   * ----------------------------------------------------------
   * Offers
   * ----------------------------------------------------------
   */
  OFFERS: {
    LIST: "/offers",
    ACTIVE: "/offers/active",
  },

  /**
   * ----------------------------------------------------------
   * Reviews
   * ----------------------------------------------------------
   */
  REVIEWS: {
    LIST: "/reviews",
  },

  /**
   * ----------------------------------------------------------
   * Contact
   * ----------------------------------------------------------
   */
  CONTACT: {
    SUBMIT: "/contact",
  },
};

export default ENDPOINTS;
