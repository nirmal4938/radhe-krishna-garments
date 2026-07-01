/**
 * ============================================================
 * SyncWare Storefront Engine
 * Route Configuration
 * ============================================================
 *
 * Central registry for all application routes.
 *
 * Responsibilities:
 * - Route paths
 * - Route names
 * - Layout selection
 * - Authentication flag
 * - Future role-based access
 */

export const APP_ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  COLLECTIONS: "/collections",
  OFFERS: "/offers",
  ABOUT: "/about",
  CONTACT: "/contact",
  NOT_FOUND: "*",
};

export const routes = [
  {
    name: "Home",
    path: APP_ROUTES.HOME,
    page: "Home",
    layout: "public",
    protected: false,
  },
  {
    name: "Products",
    path: APP_ROUTES.PRODUCTS,
    page: "Products",
    layout: "public",
    protected: false,
  },
  {
    name: "Collections",
    path: APP_ROUTES.COLLECTIONS,
    page: "Collections",
    layout: "public",
    protected: false,
  },
  {
    name: "Offers",
    path: APP_ROUTES.OFFERS,
    page: "Offers",
    layout: "public",
    protected: false,
  },
  {
    name: "About",
    path: APP_ROUTES.ABOUT,
    page: "About",
    layout: "public",
    protected: false,
  },
  {
    name: "Contact",
    path: APP_ROUTES.CONTACT,
    page: "Contact",
    layout: "public",
    protected: false,
  },
  {
    name: "Not Found",
    path: APP_ROUTES.NOT_FOUND,
    page: "NotFound",
    layout: "empty",
    protected: false,
  },
];

/**
 * Future Routes
 *
 * Dashboard
 * Cart
 * Checkout
 * Wishlist
 * Login
 * Register
 * Orders
 * Admin
 * Inventory
 * Settings
 */
