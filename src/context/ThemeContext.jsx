import { createContext } from "react";

/**
 * ============================================================
 * SyncWare Storefront Engine
 * Theme Context
 * ============================================================
 *
 * Holds the current application theme.
 * State is managed by ThemeProvider.
 */

const defaultTheme = {
  id: "default",

  name: "Default Theme",

  mode: "light",

  colors: {
    primary: "#2563EB",
    secondary: "#0F172A",
    accent: "#F59E0B",
    success: "#16A34A",
    warning: "#F59E0B",
    danger: "#DC2626",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#1E293B",
    border: "#E2E8F0",
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    headingWeight: 700,
    bodyWeight: 400,
  },

  borderRadius: "0.5rem",

  spacing: "1rem",
};

export const ThemeContext = createContext({
  theme: defaultTheme,

  loading: false,

  error: null,

  setTheme: () => {},

  toggleTheme: () => {},

  resetTheme: () => {},
});

export default ThemeContext;
