import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

/**
 * Offer Service
 * ------------------
 * Handles promotional offers and campaigns.
 * Currently returns mocked data.
 * Later this file will call the backend API.
 */

const mockOffers = [
  {
    id: 1,
    title: "Flat 20% OFF",
    slug: "flat-20-off",
    description: "Get 20% off on selected fashion products.",
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200",
    discountType: "percentage",
    discountValue: 20,
    couponCode: "SAVE20",
    featured: true,
    active: true,
    startDate: "2026-01-01",
    endDate: "2026-12-31",
  },
  {
    id: 2,
    title: "Buy 2 Get 1 Free",
    slug: "buy-2-get-1",
    description: "Applicable on selected accessories.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200",
    discountType: "bogo",
    discountValue: null,
    couponCode: null,
    featured: true,
    active: true,
    startDate: "2026-01-01",
    endDate: "2026-12-31",
  },
  {
    id: 3,
    title: "Free Shipping",
    slug: "free-shipping",
    description: "Free shipping on orders above ₹999.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    discountType: "shipping",
    discountValue: 0,
    couponCode: "FREESHIP",
    featured: false,
    active: true,
    startDate: "2026-01-01",
    endDate: "2026-12-31",
  },
];

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const offerService = {
  /**
   * Get all offers
   */
  async getOffers() {
    await delay();

    return {
      success: true,
      data: mockOffers,
      message: "Offers fetched successfully.",
    };

    // Future API
    // return api.get(ENDPOINTS.OFFERS.LIST);
  },

  /**
   * Get featured offers
   */
  async getFeaturedOffers() {
    await delay();

    return {
      success: true,
      data: mockOffers.filter((offer) => offer.featured),
      message: "Featured offers fetched successfully.",
    };

    // Future API
    // return api.get(ENDPOINTS.OFFERS.FEATURED);
  },

  /**
   * Get active offers
   */
  async getActiveOffers() {
    await delay();

    return {
      success: true,
      data: mockOffers.filter((offer) => offer.active),
      message: "Active offers fetched successfully.",
    };
  },

  /**
   * Get offer by slug
   */
  async getOfferBySlug(slug) {
    await delay();

    const offer = mockOffers.find((item) => item.slug === slug);

    return {
      success: !!offer,
      data: offer || null,
      message: offer ? "Offer fetched successfully." : "Offer not found.",
    };

    // Future API
    // return api.get(ENDPOINTS.OFFERS.DETAIL(slug));
  },

  /**
   * Validate coupon code
   */
  async validateCoupon(code) {
    await delay();

    const offer = mockOffers.find(
      (item) =>
        item.couponCode &&
        item.couponCode.toLowerCase() === code.toLowerCase() &&
        item.active,
    );

    return {
      success: !!offer,
      data: offer || null,
      message: offer ? "Coupon is valid." : "Invalid or expired coupon.",
    };

    // Future API
    // return api.post(ENDPOINTS.OFFERS.VALIDATE, { code });
  },
};

export default offerService;
