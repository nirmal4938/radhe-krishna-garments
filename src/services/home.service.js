import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

class HomeService {
  /**
   * Get complete homepage data.
   */
  async getHomePage() {
    // Future API
    // const { data } = await api.get(ENDPOINTS.HOME);
    // return data;

    return Promise.resolve({
      hero: {
        title: "Welcome to SyncWare Storefront",
        subtitle:
          "Build beautiful multi-tenant storefronts with a single platform.",
        image: "/images/hero-banner.jpg",
        cta: {
          label: "Shop Now",
          link: "/products",
        },
      },

      featuredProducts: [
        {
          id: "p1",
          name: "Premium Cotton T-Shirt",
          price: 799,
          image: "/images/products/product-1.jpg",
        },
        {
          id: "p2",
          name: "Classic Denim Jeans",
          price: 1499,
          image: "/images/products/product-2.jpg",
        },
      ],

      collections: [
        {
          id: "c1",
          name: "Summer Collection",
          image: "/images/collections/summer.jpg",
        },
        {
          id: "c2",
          name: "Winter Collection",
          image: "/images/collections/winter.jpg",
        },
      ],

      offers: [
        {
          id: "o1",
          title: "Flat 20% Off",
          description: "On selected products.",
        },
      ],

      testimonials: [
        {
          id: "t1",
          customer: "John Doe",
          message: "Amazing shopping experience!",
          rating: 5,
        },
      ],

      brands: [
        {
          id: "b1",
          name: "SyncBrand",
          logo: "/images/brands/syncbrand.png",
        },
      ],

      newsletter: {
        enabled: true,
        title: "Subscribe to our newsletter",
        description: "Get the latest offers and updates.",
      },
    });
  }

  /**
   * Get hero section only.
   */
  async getHero() {
    const data = await this.getHomePage();
    return data.hero;
  }

  /**
   * Get featured products.
   */
  async getFeaturedProducts() {
    const data = await this.getHomePage();
    return data.featuredProducts;
  }

  /**
   * Get homepage collections.
   */
  async getCollections() {
    const data = await this.getHomePage();
    return data.collections;
  }

  /**
   * Get active homepage offers.
   */
  async getOffers() {
    const data = await this.getHomePage();
    return data.offers;
  }

  /**
   * Get customer testimonials.
   */
  async getTestimonials() {
    const data = await this.getHomePage();
    return data.testimonials;
  }

  /**
   * Get featured brands.
   */
  async getBrands() {
    const data = await this.getHomePage();
    return data.brands;
  }

  /**
   * Get newsletter configuration.
   */
  async getNewsletter() {
    const data = await this.getHomePage();
    return data.newsletter;
  }
}

const homeService = new HomeService();

export default homeService;
