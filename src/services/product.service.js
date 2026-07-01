import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

/**
 * Product Service
 *
 * Responsible for all product-related operations.
 *
 * Current Status:
 * - Returns mock data.
 * - API calls are scaffolded for future integration.
 */
class ProductService {
  constructor() {
    this.products = [
      {
        id: "p1",
        sku: "SKU-001",
        slug: "premium-cotton-tshirt",
        name: "Premium Cotton T-Shirt",
        shortDescription: "Soft premium cotton t-shirt.",
        description:
          "Comfortable premium cotton t-shirt suitable for everyday wear.",
        price: 799,
        salePrice: 699,
        currency: "INR",
        image: "/images/products/product-1.jpg",
        images: ["/images/products/product-1.jpg"],
        category: "Men",
        brand: "SyncWear",
        stock: 120,
        featured: true,
        active: true,
      },
      {
        id: "p2",
        sku: "SKU-002",
        slug: "classic-denim-jeans",
        name: "Classic Denim Jeans",
        shortDescription: "Slim fit denim jeans.",
        description: "Classic slim fit jeans for everyday style.",
        price: 1499,
        salePrice: 1299,
        currency: "INR",
        image: "/images/products/product-2.jpg",
        images: ["/images/products/product-2.jpg"],
        category: "Men",
        brand: "SyncWear",
        stock: 45,
        featured: true,
        active: true,
      },
    ];
  }

  /**
   * Get all products.
   */
  async getProducts() {
    // Future API
    // const { data } = await api.get(ENDPOINTS.PRODUCTS.LIST);
    // return data;

    return Promise.resolve(this.products);
  }

  /**
   * Get featured products.
   */
  async getFeaturedProducts() {
    const products = await this.getProducts();

    return products.filter((product) => product.featured);
  }

  /**
   * Get product by ID.
   */
  async getProductById(id) {
    const products = await this.getProducts();

    return products.find((product) => product.id === id) || null;
  }

  /**
   * Get product by slug.
   */
  async getProductBySlug(slug) {
    const products = await this.getProducts();

    return products.find((product) => product.slug === slug) || null;
  }

  /**
   * Search products.
   */
  async searchProducts(keyword = "") {
    const products = await this.getProducts();

    const search = keyword.toLowerCase();

    return products.filter((product) =>
      product.name.toLowerCase().includes(search),
    );
  }

  /**
   * Filter by category.
   */
  async getProductsByCategory(category) {
    const products = await this.getProducts();

    return products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase(),
    );
  }

  /**
   * Get related products.
   */
  async getRelatedProducts(productId, limit = 4) {
    const products = await this.getProducts();

    return products
      .filter((product) => product.id !== productId)
      .slice(0, limit);
  }
}

const productService = new ProductService();

export default productService;
