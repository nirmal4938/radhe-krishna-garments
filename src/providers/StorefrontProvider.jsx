// src/providers/StorefrontProvider.jsx

import { useEffect, useMemo, useState } from "react";

import StorefrontContext from "../context/StorefrontContext";
import storefrontService from "../services/storefront.service";

export default function StorefrontProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  //   loading;
  //   ready;
  //   not - found;
  //   error;
  const [storeStatus, setStoreStatus] = useState("loading");
  const [bootstrap, setBootstrap] = useState({
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
  });

  useEffect(() => {
    initializeStorefront();
  }, []);

  async function initializeStorefront() {
    try {
      setLoading(true);
      setError(null);
      setStoreStatus("loading");

      const response = await storefrontService.bootstrap();

      setBootstrap(response.data);

      setStoreStatus("ready");
    } catch (err) {
      if (err.response?.status === 404) {
        setStoreStatus("not-found");
      } else {
        setStoreStatus("error");
      }

      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const refreshStorefront = async () => {
    await initializeStorefront();
  };

  const value = useMemo(
    () => ({
      ...bootstrap,

      loading,
      error,

      storeStatus,

      refreshStorefront,
    }),
    [bootstrap, loading, error, storeStatus],
  );

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  );
}
