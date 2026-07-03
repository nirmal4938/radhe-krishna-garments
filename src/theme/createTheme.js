import { createTheme } from "@mui/material";

/**
 * Create a Material UI theme from a theme definition.
 * @param {Object} themeDefinition - The theme definition object.
 * @returns {Object} Material UI theme.
 */
export function createStoreTheme(themeDefinition) {
  return createTheme(themeDefinition);
}
