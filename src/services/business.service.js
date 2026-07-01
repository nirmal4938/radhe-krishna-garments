import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

/**
 * Business Service
 *
 * Responsible for all business/tenant related operations.
 *
 * Current Status:
 * - Returns mock data.
 * - API calls are scaffolded for future integration.
 */
class BusinessService {
  /**
   * Get current business information.
   */
  async getBusiness() {
    // Future API
    // const { data } = await api.get(ENDPOINTS.BUSINESS.DETAILS);
    // return data;

    return Promise.resolve({
      id: "business-demo",

      slug: "demo-store",

      name: "SyncWare Demo Store",

      tagline: "Modern Commerce Powered by SyncWare",

      logo: "/logo.png",

      favicon: "/favicon.ico",

      description:
        "A production-ready multi-tenant storefront powered by SyncWare.",

      contact: {
        phone: "+91 9876543210",
        email: "info@syncware.fun",
        whatsapp: "+91 9876543210",
      },

      address: {
        line1: "Demo Business Address",
        city: "Supaul",
        state: "Bihar",
        country: "India",
        postalCode: "852131",
      },

      social: {
        facebook: "",
        instagram: "",
        youtube: "",
        linkedin: "",
      },

      theme: {
        primary: "#2563EB",
        secondary: "#1E293B",
        accent: "#F59E0B",
      },

      seo: {
        title: "SyncWare Demo Store",
        description: "Production-ready Storefront Engine",
        keywords: ["SyncWare", "Storefront", "Commerce"],
      },
    });
  }

  /**
   * Resolve tenant by hostname or slug.
   */
  async resolveTenant(identifier) {
    // Future API
    // const { data } = await api.get(`${ENDPOINTS.BUSINESS.RESOLVE}/${identifier}`);
    // return data;

    return Promise.resolve({
      slug: identifier,
      active: true,
    });
  }

  /**
   * Get active business theme.
   */
  async getTheme() {
    const business = await this.getBusiness();
    return business.theme;
  }

  /**
   * Get SEO metadata.
   */
  async getSEO() {
    const business = await this.getBusiness();
    return business.seo;
  }

  /**
   * Get contact information.
   */
  async getContact() {
    const business = await this.getBusiness();
    return business.contact;
  }
}

const businessService = new BusinessService();

export default businessService;
