import { createContext } from "react";

/**
 * ============================================================
 * SyncWare Storefront Engine
 * Business Context (Production Grade)
 * ============================================================
 *
 * This context is the SINGLE SOURCE OF TRUTH for:
 * - Tenant (business) data
 * - Branding
 * - SEO metadata
 * - UI personalization
 *
 * UI MUST NOT directly hardcode business values.
 */

const defaultBusiness = {
  id: null,
  slug: "",
  name: "My Store",
  logo: "",
  favicon: "",
  domain: "",

  contact: {
    phone: "",
    email: "",
    whatsapp: "",
    address: "",
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
  },

  seo: {
    title: "",
    description: "",
    keywords: "",
  },

  theme: "default",

  settings: {
    currency: "INR",
    language: "en",
    timezone: "Asia/Kolkata",
  },
};

/**
 * ============================================================
 * CONTEXT VALUE CONTRACT
 * ============================================================
 *
 * We expose BOTH raw data + computed helpers
 * so UI layer becomes simple and safe.
 */

export const BusinessContext = createContext({
  // raw tenant data
  business: defaultBusiness,

  // state
  loading: false,
  error: null,

  // actions
  setBusiness: () => {},
  refreshBusiness: () => {},

  /**
   * ============================================================
   * DERIVED HELPERS (IMPORTANT FOR UI LAYER)
   * ============================================================
   */

  // safe display name for navbar/header
  displayName: "My Store",

  // safe logo fallback
  logoUrl: "",

  // SEO helpers
  seoTitle: "",
  seoDescription: "",

  // currency
  currency: "INR",

  // feature flags (future-proofing)
  features: {
    cart: true,
    search: true,
    reviews: true,
  },
});

export default BusinessContext;
