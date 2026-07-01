import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

/**
 * Contact Service
 * ------------------
 * Handles contact form submissions and business inquiries.
 * Currently returns mocked responses.
 * Later this file will call the backend API.
 */

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const contactService = {
  /**
   * Submit contact form
   */
  async submitContact(formData) {
    await delay();

    return {
      success: true,
      data: {
        id: Date.now(),
        ...formData,
        status: "received",
        submittedAt: new Date().toISOString(),
      },
      message: "Thank you for contacting us. We'll get back to you soon.",
    };

    // Future API
    // return api.post(ENDPOINTS.CONTACT.SUBMIT, formData);
  },

  /**
   * Subscribe to newsletter
   */
  async subscribeNewsletter(email) {
    await delay();

    return {
      success: true,
      data: {
        email,
        subscribed: true,
        subscribedAt: new Date().toISOString(),
      },
      message: "Newsletter subscription successful.",
    };

    // Future API
    // return api.post(ENDPOINTS.CONTACT.NEWSLETTER, { email });
  },

  /**
   * Request a callback
   */
  async requestCallback(data) {
    await delay();

    return {
      success: true,
      data: {
        id: Date.now(),
        ...data,
        status: "pending",
        requestedAt: new Date().toISOString(),
      },
      message: "Callback request submitted successfully.",
    };

    // Future API
    // return api.post(ENDPOINTS.CONTACT.CALLBACK, data);
  },

  /**
   * Get business contact information
   */
  async getContactInfo() {
    await delay();

    return {
      success: true,
      data: {
        email: "info@business.com",
        phone: "+91 9876543210",
        whatsapp: "+91 9876543210",
        address: "Business Address",
        businessHours: {
          monday: "09:00 AM - 08:00 PM",
          tuesday: "09:00 AM - 08:00 PM",
          wednesday: "09:00 AM - 08:00 PM",
          thursday: "09:00 AM - 08:00 PM",
          friday: "09:00 AM - 08:00 PM",
          saturday: "09:00 AM - 08:00 PM",
          sunday: "Closed",
        },
        socialLinks: {
          facebook: "",
          instagram: "",
          youtube: "",
          linkedin: "",
        },
      },
      message: "Contact information fetched successfully.",
    };

    // Future API
    // return api.get(ENDPOINTS.CONTACT.INFO);
  },
};

export default contactService;
