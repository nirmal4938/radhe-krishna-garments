import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

/**
 * Collection Service
 * ------------------
 * Handles storefront collection/category operations.
 * Currently returns mocked data.
 * Later this file will call the backend API.
 */

const mockCollections = [
  {
    id: 1,
    slug: "mens-fashion",
    name: "Men's Fashion",
    description: "Latest clothing for men.",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800",
    productCount: 48,
    featured: true,
  },
  {
    id: 2,
    slug: "womens-fashion",
    name: "Women's Fashion",
    description: "Trending styles for women.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    productCount: 56,
    featured: true,
  },
  {
    id: 3,
    slug: "electronics",
    name: "Electronics",
    description: "Latest gadgets and accessories.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    productCount: 31,
    featured: false,
  },
  {
    id: 4,
    slug: "home-living",
    name: "Home & Living",
    description: "Furniture and lifestyle essentials.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    productCount: 22,
    featured: false,
  },
];

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const collectionService = {
  /**
   * Get all collections
   */
  async getCollections() {
    await delay();

    return {
      success: true,
      data: mockCollections,
      message: "Collections fetched successfully.",
    };

    // Future API
    // return api.get(ENDPOINTS.COLLECTIONS.LIST);
  },

  /**
   * Get featured collections
   */
  async getFeaturedCollections() {
    await delay();

    return {
      success: true,
      data: mockCollections.filter((collection) => collection.featured),
      message: "Featured collections fetched successfully.",
    };

    // Future API
    // return api.get(ENDPOINTS.COLLECTIONS.FEATURED);
  },

  /**
   * Get collection by slug
   */
  async getCollectionBySlug(slug) {
    await delay();

    const collection = mockCollections.find((item) => item.slug === slug);

    return {
      success: !!collection,
      data: collection || null,
      message: collection
        ? "Collection fetched successfully."
        : "Collection not found.",
    };

    // Future API
    // return api.get(ENDPOINTS.COLLECTIONS.DETAIL(slug));
  },

  /**
   * Search collections
   */
  async searchCollections(keyword = "") {
    await delay();

    const search = keyword.toLowerCase();

    const result = mockCollections.filter(
      (collection) =>
        collection.name.toLowerCase().includes(search) ||
        collection.description.toLowerCase().includes(search),
    );

    return {
      success: true,
      data: result,
      message: "Search completed.",
    };
  },
};

export default collectionService;
