// // src/config/themes.js
// // Multi-tenant theme configuration for SyncWare Storefront Engine
// // Theme definitions that can be applied to any tenant

// export const themes = {
//   // Default theme - matches current Radhe Krishna Garments appearance
//   default: {
//     primaryColor: "#8B1E3F",
//     secondaryColor: "#D4AF37",
//     backgroundColor: "#FFF7F0",
//     textColor: "#12040A",
//     accentColor: "#4A0D1F",
//     borderRadius: "8px",
//     spacingScale: {
//       xs: "0.5rem",
//       sm: "1rem",
//       md: "1.5rem",
//       lg: "2rem",
//       xl: "3rem",
//     },
//     typography: {
//       fontFamily:
//         'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
//       fontSize: {
//         xs: "0.75rem",
//         sm: "0.875rem",
//         md: "1rem",
//         lg: "1.125rem",
//         xl: "1.25rem",
//         "2xl": "1.5rem",
//       },
//     },
//   },

//   // Example placeholder for future tenants
//   // tenant1: {
//   //   primaryColor: '#0066CC',
//   //   secondaryColor: '#FF6600',
//   //   backgroundColor: '#F8F9FA',
//   //   textColor: '#212529',
//   //   accentColor: '#DC3545',
//   //   borderRadius: '4px',
//   //   spacingScale: { ... },
//   //   typography: { ... }
//   // },

//   // Additional tenant themes can be added here
// };

// // Export a function to apply theme to document root
// export const applyTheme = (themeName = "default") => {
//   const theme = themes[themeName] || themes.default;

//   // Update CSS variables on :root
//   const root = document.documentElement.style;
//   root.setProperty("--primary-color", theme.primaryColor);
//   root.setProperty("--secondary-color", theme.secondaryColor);
//   root.setProperty("--background-color", theme.backgroundColor);
//   root.setProperty("--text-color", theme.textColor);
//   root.setProperty("--accent-color", theme.accentColor);
//   root.setProperty("--border-radius", theme.borderRadius);

//   // Store theme name in data attribute for component access
//   document.documentElement.setAttribute("data-theme", themeName);

//   return theme;
// };

/**
 * ------------------------------------------------------------
 * SyncWare Storefront Engine
 * Theme Registry
 * ------------------------------------------------------------
 *
 * Responsibility
 * --------------
 * Central place for all application themes.
 *
 * This file contains only presentation tokens.
 *
 * It does NOT contain:
 * - business information
 * - product data
 * - API logic
 * - tenant configuration
 *
 * Future:
 * BusinessProvider will decide which theme to use.
 * ------------------------------------------------------------
 */

export const THEMES = {
  light: {
    name: "Light",

    colors: {
      primary: "#2563EB",
      secondary: "#0F172A",
      accent: "#F97316",

      background: "#FFFFFF",
      surface: "#F8FAFC",

      text: "#0F172A",
      textSecondary: "#64748B",

      border: "#E2E8F0",
      success: "#16A34A",
      warning: "#F59E0B",
      danger: "#DC2626",
    },
  },

  dark: {
    name: "Dark",

    colors: {
      primary: "#3B82F6",
      secondary: "#F8FAFC",
      accent: "#FB923C",

      background: "#020617",
      surface: "#0F172A",

      text: "#F8FAFC",
      textSecondary: "#CBD5E1",

      border: "#334155",
      success: "#22C55E",
      warning: "#FACC15",
      danger: "#EF4444",
    },
  },
};

/**
 * Default Theme
 */
export const DEFAULT_THEME = "light";

/**
 * Get Theme Object
 */
export const getTheme = (themeName = DEFAULT_THEME) => {
  return THEMES[themeName] || THEMES[DEFAULT_THEME];
};

/**
 * Check Theme Exists
 */
export const hasTheme = (themeName) => {
  return Object.prototype.hasOwnProperty.call(THEMES, themeName);
};

/**
 * Available Themes
 */
export const getAvailableThemes = () => {
  return Object.keys(THEMES);
};

export default THEMES;
