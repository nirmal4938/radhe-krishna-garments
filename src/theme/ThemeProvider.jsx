import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useContext } from "react";
import StorefrontContext from "../context/StorefrontContext";
import { getTheme } from "./themeRegistry";
import { createStoreTheme } from "./createTheme";
import { default as defaultTheme } from "./themes/default";
import { default as mobileTheme } from "./themes/mobile";
import { default as pharmacyTheme } from "./themes/pharmacy";
import { default as restaurantTheme } from "./themes/restaurant";
import { default as fashionTheme } from "./themes/fashion";
import { default as furnitureTheme } from "./themes/furniture";
import { default as jewelleryTheme } from "./themes/jewellery";
import { default as luxuryTheme } from "./themes/luxury";

const themeMap = {
  defaultTheme,
  mobileTheme,
  pharmacyTheme,
  restaurantTheme,
  fashionTheme,
  furnitureTheme,
  jewelleryTheme,
  luxuryTheme,
};

export default function ThemeProvider({ children }) {
  const { business } = useContext(StorefrontContext);
  console.log("business", business);
  //   const categoryKey = business?.category?.key || "default";
  //   const themeName = getTheme(categoryKey);
  //   const themeDefinition = themeMap[themeName] || defaultTheme;
  //   const muiTheme = createStoreTheme(themeDefinition);

  const themeDefinition = getTheme(business?.category?.key);

  const muiTheme = createStoreTheme(themeDefinition);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
