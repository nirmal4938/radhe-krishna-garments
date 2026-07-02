/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * Axios Client
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Creates the application's single Axios instance.
 *
 * Every service must import this client.
 *
 * Example:
 *
 * import api from "@/api/axios";
 *
 * const response = await api.get("/products");
 *
 * Interceptors are registered automatically.
 * ------------------------------------------------------------
 */

import axios from "axios";

import ENV from "@/config/env";
import { APP } from "@/config/constants";

const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: ENV.TIMEOUT,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-App-Name": APP.NAME,
  },
});

/**
 * ------------------------------------------------------------
 * Request Interceptor
 * ------------------------------------------------------------
 */
api.interceptors.request.use(
  (config) => {
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
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
