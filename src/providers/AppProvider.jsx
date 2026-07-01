import { useMemo, useState } from "react";
import AppContext from "../context/AppContext";

/**
 * ============================================================
 * SyncWare Storefront Engine
 * App Provider
 * ============================================================
 *
 * Responsible for:
 * - Global Loading State
 * - Global Errors
 * - Sidebar State
 * - Search Modal State
 * - Language
 * - App Initialization
 */

export default function AppProvider({ children }) {
  const [app, setApp] = useState({
    loading: false,
    initialized: false,
    error: null,
    online: navigator.onLine,
    language: "en",
    sidebarOpen: false,
    searchOpen: false,
    notificationCount: 0,
  });

  /**
   * Loading
   */
  const setLoading = (loading) => {
    setApp((prev) => ({
      ...prev,
      loading,
    }));
  };

  /**
   * Error
   */
  const setError = (error) => {
    setApp((prev) => ({
      ...prev,
      error,
    }));
  };

  const clearError = () => {
    setApp((prev) => ({
      ...prev,
      error: null,
    }));
  };

  /**
   * Sidebar
   */
  const toggleSidebar = () => {
    setApp((prev) => ({
      ...prev,
      sidebarOpen: !prev.sidebarOpen,
    }));
  };

  const openSidebar = () => {
    setApp((prev) => ({
      ...prev,
      sidebarOpen: true,
    }));
  };

  const closeSidebar = () => {
    setApp((prev) => ({
      ...prev,
      sidebarOpen: false,
    }));
  };

  /**
   * Search
   */
  const openSearch = () => {
    setApp((prev) => ({
      ...prev,
      searchOpen: true,
    }));
  };

  const closeSearch = () => {
    setApp((prev) => ({
      ...prev,
      searchOpen: false,
    }));
  };

  /**
   * Language
   */
  const setLanguage = (language) => {
    setApp((prev) => ({
      ...prev,
      language,
    }));
  };

  /**
   * App Initialization
   */
  const initializeApp = () => {
    setApp((prev) => ({
      ...prev,
      initialized: true,
    }));
  };

  const value = useMemo(
    () => ({
      app,

      setLoading,
      setError,
      clearError,

      toggleSidebar,
      openSidebar,
      closeSidebar,

      openSearch,
      closeSearch,

      setLanguage,

      initializeApp,
    }),
    [app],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
