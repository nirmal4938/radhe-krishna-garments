/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * Axios Interceptors
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Registers request and response interceptors
 * on the shared Axios instance.
 *
 * This is the central place for:
 *
 * • Authentication
 * • Tenant Headers
 * • Request Logging
 * • Global Error Handling
 * • Token Refresh
 * • Analytics
 *
 * All API requests pass through here.
 * ------------------------------------------------------------
 */

import { APP_NAME } from "@/config/constants";
import { getTenantSlug } from "@/config/tenant";

/**
 * Register all Axios interceptors.
 *
 * @param {import("axios").AxiosInstance} api
 */
const setupInterceptors = (api) => {
  /**
   * ------------------------------------------------------------
   * Request Interceptor
   * ------------------------------------------------------------
   */
  api.interceptors.request.use(
    (config) => {
      // Current Tenant
      config.headers["X-Tenant"] = getTenantSlug();

      // Application Name
      config.headers["X-App-Name"] = APP_NAME;

      /**
       * Future:
       *
       * const token = localStorage.getItem("accessToken");
       *
       * if (token) {
       *   config.headers.Authorization = `Bearer ${token}`;
       * }
       */

      return config;
    },

    (error) => Promise.reject(error),
  );

  /**
   * ------------------------------------------------------------
   * Response Interceptor
   * ------------------------------------------------------------
   */
  api.interceptors.response.use(
    (response) => {
      return response;
    },

    (error) => {
      /**
       * Future Examples:
       *
       * 401 -> Refresh Token
       * 403 -> Logout User
       * 404 -> Global Not Found
       * 500 -> Error Reporting
       */

      return Promise.reject(error);
    },
  );
};

export default setupInterceptors;
