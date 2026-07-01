import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

/**
 * Review Service
 * ------------------
 * Handles customer reviews and testimonials.
 * Currently returns mocked data.
 * Later this file will call the backend API.
 */

const mockReviews = [
  {
    id: 1,
    customerName: "Rahul Sharma",
    customerAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    rating: 5,
    title: "Excellent Service",
    review:
      "Amazing quality products and very fast delivery. Highly recommended.",
    verified: true,
    featured: true,
    createdAt: "2026-01-15",
  },
  {
    id: 2,
    customerName: "Priya Singh",
    customerAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    rating: 4,
    title: "Good Experience",
    review:
      "Customer support was responsive and the product quality was great.",
    verified: true,
    featured: true,
    createdAt: "2026-02-08",
  },
  {
    id: 3,
    customerName: "Amit Kumar",
    customerAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    rating: 5,
    title: "Worth Every Penny",
    review:
      "One of the best online shopping experiences I've had. Will definitely order again.",
    verified: false,
    featured: false,
    createdAt: "2026-03-02",
  },
];

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const reviewService = {
  /**
   * Get all reviews
   */
  async getReviews() {
    await delay();

    return {
      success: true,
      data: mockReviews,
      message: "Reviews fetched successfully.",
    };

    // Future API
    // return api.get(ENDPOINTS.REVIEWS.LIST);
  },

  /**
   * Get featured reviews
   */
  async getFeaturedReviews() {
    await delay();

    return {
      success: true,
      data: mockReviews.filter((review) => review.featured),
      message: "Featured reviews fetched successfully.",
    };

    // Future API
    // return api.get(ENDPOINTS.REVIEWS.FEATURED);
  },

  /**
   * Get review by ID
   */
  async getReviewById(id) {
    await delay();

    const review = mockReviews.find((item) => item.id === Number(id));

    return {
      success: !!review,
      data: review || null,
      message: review ? "Review fetched successfully." : "Review not found.",
    };

    // Future API
    // return api.get(ENDPOINTS.REVIEWS.DETAIL(id));
  },

  /**
   * Submit review
   */
  async submitReview(reviewData) {
    await delay();

    return {
      success: true,
      data: {
        id: Date.now(),
        ...reviewData,
        verified: false,
        featured: false,
        createdAt: new Date().toISOString(),
      },
      message: "Review submitted successfully.",
    };

    // Future API
    // return api.post(ENDPOINTS.REVIEWS.CREATE, reviewData);
  },
};

export default reviewService;
