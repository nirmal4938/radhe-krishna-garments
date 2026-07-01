// src/context/TenantContext.js
// Tenant context provider for SyncWare Storefront Engine
// Enables multi-tenant configuration and theming

import { createContext, useContext, useState, useEffect } from "react";
import { getTenantConfig, switchTenant } from "../config/tenant";
import { applyTheme } from "../config/themes";

// Create context
const TenantContext = createContext();

// Custom hook for tenant usage
export const useTenant = () => {
  return useContext(TenantContext);
};

// Tenant Provider Component
export const TenantProvider = ({
  children,
  initialTenantId = "radhe-krishna-garments",
}) => {
  const [currentTenantId, setCurrentTenantId] = useState(initialTenantId);
  const [theme, setTheme] = useState(getTenantConfig(initialTenantId));

  // Apply theme when tenant changes
  useEffect(() => {
    const newTheme = getTenantConfig(currentTenantId);
    applyTheme(newTheme.theme);
    setTheme(newTheme);
  }, [currentTenantId]);

  // Public API
  const value = {
    currentTenantId,
    currentTenant: switchTenant(currentTenantId),
    theme,
    switchTenant: (tenantId) => setCurrentTenantId(tenantId),
    getTenantConfig: (tenantId) => getTenantConfig(tenantId),
  };

  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
};

// Custom hook for accessing tenant context
export const useTenantContext = () => {
  return useTenant();
};
