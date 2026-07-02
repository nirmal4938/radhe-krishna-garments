// src/providers/StorefrontProvider.jsx

import { useEffect, useMemo, useState } from "react";

import StorefrontContext from "../context/StorefrontContext";
import storefrontService from "../services/storefront.service";

// Bootstrap Screens
import SplashScreen from "../pages/Bootstrap/SplashScreen";
import StoreNotFoundPage from "../pages/Bootstrap/StoreNotFound";
import BootstrapErrorPage from "../pages/Bootstrap/BootstrapError";

const initialBootstrap = {
  business: null,
  settings: null,
  theme: null,
  navigation: null,
  home: null,
  collections: [],
  products: [],
  offers: [],
  reviews: [],
  seo: null,
};

export default function StorefrontProvider({ children }) {
  const [bootstrap, setBootstrap] = useState(initialBootstrap);

  const [error, setError] = useState(null);

  /**
   * booting
   * ready
   * store-not-found
   * bootstrap-error
   */
  const [storeStatus, setStoreStatus] = useState("booting");

  useEffect(() => {
    initializeStorefront();
  }, []);

  async function initializeStorefront() {
    try {
      setError(null);
      setStoreStatus("booting");

      const response = await storefrontService.bootstrap();

      setBootstrap(response.data);

      setStoreStatus("ready");
    } catch (err) {
      setError(err);

      if (
        err.response?.status === 404 &&
        err.response?.data?.code === "STORE_NOT_FOUND"
      ) {
        setStoreStatus("store-not-found");
        return;
      }

      setStoreStatus("bootstrap-error");
    }
  }

  async function refreshStorefront() {
    await initializeStorefront();
  }

  const value = useMemo(
    () => ({
      ...bootstrap,

      error,

      storeStatus,

      refreshStorefront,
    }),
    [bootstrap, error, storeStatus],
  );

  // ------------------------------------------------------------
  // Bootstrap Gatekeeper
  // ------------------------------------------------------------

  switch (storeStatus) {
    case "booting":
      return <SplashScreen />;

    case "store-not-found":
      return <StoreNotFoundPage />;

    case "bootstrap-error":
      return <BootstrapErrorPage error={error} />;

    case "ready":
    default:
      return (
        <StorefrontContext.Provider value={value}>
          {children}
        </StorefrontContext.Provider>
      );
  }
}
