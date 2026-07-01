import { useEffect, useMemo, useState } from "react";

import BusinessContext from "../context/BusinessContext";
import { tenantConfig } from "../config/tenant";

/**
 * ============================================================
 * SyncWare Storefront Engine
 * Business Provider
 * ============================================================
 *
 * Responsibilities:
 * - Load current tenant
 * - Expose business information
 * - Handle loading/error state
 * - Refresh business data
 *
 * Future:
 * - Replace tenantConfig with API call
 * - businessService.getBusiness()
 */

export default function BusinessProvider({ children }) {
  const [business, setBusiness] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  /**
   * Load Business
   */
  const loadBusiness = async () => {
    try {
      setLoading(true);
      setError(null);

      /**
       * Temporary Source
       *
       * Future:
       * const data = await businessService.getBusiness();
       */
      setBusiness(tenantConfig);
    } catch (err) {
      console.error(err);

      setError("Unable to load business.");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Refresh Business
   */
  const refreshBusiness = async () => {
    await loadBusiness();
  };

  /**
   * Initial Load
   */
  useEffect(() => {
    loadBusiness();
  }, []);

  const value = useMemo(
    () => ({
      business,

      loading,

      error,

      refreshBusiness,

      setBusiness,
    }),
    [business, loading, error],
  );

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
}
