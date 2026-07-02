import { createContext } from "react";

/**
 * ============================================================
 * SyncWare Storefront Engine
 * Storefront Context
 * ============================================================
 *
 * Global runtime state for the current storefront.
 *
 * Loaded once during application bootstrap.
 *
 * Source:
 * GET /api/v1/storefront/bootstrap
 *
 * Every page consumes this context instead of calling
 * individual GET APIs.
 *
 * Home
 * Products
 * Collections
 * Offers
 * About
 * Contact
 * Navbar
 * Footer
 *
 * ============================================================
 */

const StorefrontContext = createContext({
  loading: true,
  error: null,
  storeStatus: "loading",
  business: null,
  settings: null,
  theme: null,
  navigation: null,
  home: null,
  collections: [],
  products: [],
  offers: [],
  reviews: [],
  seo: null,
  refreshStorefront: async () => {},
});

export default StorefrontContext;
