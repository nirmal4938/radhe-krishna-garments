// // src/config/tenant.js
// // Multi-tenant configuration for SyncWare Storefront Engine
// // Centralized tenant configuration management

// import { themes } from "./themes";

// export const tenants = {
//   // Default tenant - Radhe Krishna Garments
//   "radhe-krishna-garments": {
//     name: "Radhe Krishna Garments",
//     description: "Premium Ethnic Fashion Experience",
//     theme: "default",
//     logo: "/assets/rk-logo.png",
//     primaryColor: "#8B1E3F",
//     secondaryColor: "#D4AF37",
//     accentColor: "#4A0D1F",
//     contact: {
//       phone: "917218396694",
//       address: "Simrahi Bazaar, NH-27 Road",
//       email: "contact@radhekrishnagarments.com",
//     },
//     // Tenant-specific configuration
//     catalog: {
//       // Catalog configuration will be loaded dynamically
//     },
//     // GSAP configuration overrides
//     gsap: {
//       heroDuration: 1000,
//       animation: "power3.out",
//     },
//   },

//   // Example placeholder for additional tenants
//   // 'fashion-haven': {
//   //   name: 'Fashion Haven',
//   //   description: 'Modern Fashion Retail',
//   //   theme: 'default',
//   //   logo: '/assets/fh-logo.png',
//   //   primaryColor: '#0066CC',
//   //   secondaryColor: '#FF6600',
//   //   accentColor: '#DC3545',
//   //   contact: { /* ... */ },
//   //   catalog: {}
//   // },

//   // Additional tenants can be registered here
// };

// // Export utilities for tenant management
// export const getTenantConfig = (tenantId) => {
//   const config = tenants[tenantId] || tenants["radhe-krishna-garments"];

//   return {
//     ...config,
//     // Derived properties
//     effectiveTheme: themes[config.theme] || themes.default,
//     getLogoPath: () => config.logo,
//     getPrimaryColor: () => config.primaryColor,
//     getSecondaryColor: () => config.secondaryColor,
//     getAccentColor: () => config.accentColor,
//     getContactInfo: () => config.contact,
//   };
// };

// export const switchTenant = (tenantId) => {
//   // In a real implementation, this would trigger reconfiguration
//   // For now, it just returns the config
//   return getTenantConfig(tenantId);
// };

/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * Tenant Resolution
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Determines which storefront (tenant) is currently active.
 *
 * Examples
 * --------
 * rkgarments.syncware.fun
 * rajmobile.syncware.fun
 * pharmacy.syncware.fun
 *
 * This file DOES NOT contain business data.
 * It only identifies the tenant.
 *
 * Future:
 * Backend API will return complete tenant configuration.
 * ------------------------------------------------------------
 */

const DEFAULT_TENANT = "demo";

/**
 * Returns current hostname.
 */
export const getHostname = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.hostname;
};

/**
 * Extract subdomain from hostname.
 *
 * Example:
 * rkgarments.syncware.fun
 * -> rkgarments
 */
export const getSubdomain = () => {
  const hostname = getHostname();

  const parts = hostname.split(".");

  if (parts.length < 3) {
    return DEFAULT_TENANT;
  }

  return parts[0];
};

/**
 * Current Tenant Slug
 */
export const getTenantSlug = () => {
  return getSubdomain();
};

/**
 * Returns tenant configuration.
 *
 * Currently returns only slug.
 *
 * Future response:
 *
 * {
 *   slug,
 *   apiBaseUrl,
 *   cdnUrl,
 *   assetsUrl
 * }
 */
export const getTenantConfig = () => ({
  slug: getTenantSlug(),
});

/**
 * Development helper.
 *
 * localhost
 * 127.0.0.1
 * local.syncware.fun
 */
export const isDevelopmentTenant = () => {
  const hostname = getHostname();

  return hostname.includes("localhost") || hostname.includes("127.0.0.1");
};

export default {
  getHostname,
  getSubdomain,
  getTenantSlug,
  getTenantConfig,
  isDevelopmentTenant,
};
