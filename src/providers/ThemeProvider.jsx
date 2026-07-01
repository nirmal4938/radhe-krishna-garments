import { useContext, useEffect, useMemo, useState } from "react";

import ThemeContext from "../context/ThemeContext";
import BusinessContext from "../context/BusinessContext";
import { themes } from "../config/themes";

/**
 * ============================================================
 * SyncWare Storefront Engine
 * Theme Provider
 * ============================================================
 *
 * Responsibilities:
 * - Load active theme
 * - Listen for business changes
 * - Apply tenant theme
 * - Expose theme state
 *
 * Future:
 * - Load theme from API
 * - Persist user preference
 * - Dark / Light mode
 */

export default function ThemeProvider({ children }) {
  const { business } = useContext(BusinessContext);

  const [theme, setTheme] = useState(themes.default);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  /**
   * Load Theme
   */
  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      if (!business?.theme) {
        setTheme(themes.default);
        return;
      }

      const selectedTheme = themes[business.theme] || themes.default;

      setTheme(selectedTheme);
    } catch (err) {
      console.error(err);

      setError("Unable to load theme.");

      setTheme(themes.default);
    } finally {
      setLoading(false);
    }
  }, [business]);

  /**
   * Manual Theme Change
   */
  const changeTheme = (themeKey) => {
    const selectedTheme = themes[themeKey] || themes.default;

    setTheme(selectedTheme);
  };

  /**
   * Toggle Theme Mode
   */
  const toggleTheme = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === "dark" ? "light" : "dark",
    }));
  };

  /**
   * Reset Theme
   */
  const resetTheme = () => {
    setTheme(themes.default);
  };

  const value = useMemo(
    () => ({
      theme,

      loading,

      error,

      setTheme: changeTheme,

      toggleTheme,

      resetTheme,
    }),
    [theme, loading, error],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
