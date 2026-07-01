import { createContext } from "react";

/**
 * ============================================================
 * SyncWare Storefront Engine
 * App Context
 * ============================================================
 *
 * Holds global application state.
 * State is managed by AppProvider.
 */

const defaultAppState = {
  loading: false,

  initialized: false,

  error: null,

  online: true,

  language: "en",

  sidebarOpen: false,

  searchOpen: false,

  notificationCount: 0,
};

export const AppContext = createContext({
  app: defaultAppState,

  setLoading: () => {},

  setError: () => {},

  clearError: () => {},

  toggleSidebar: () => {},

  openSidebar: () => {},

  closeSidebar: () => {},

  openSearch: () => {},

  closeSearch: () => {},

  setLanguage: () => {},

  initializeApp: () => {},
});

export default AppContext;
