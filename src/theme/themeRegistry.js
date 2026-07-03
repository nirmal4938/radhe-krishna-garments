// export const themeRegistry = {
//   mobile: "mobileTheme",
//   fashion: "fashionTheme",
//   restaurant: "restaurantTheme",
//   pharmacy: "pharmacyTheme",
//   jewellery: "jewelleryTheme",
//   furniture: "furnitureTheme",
//   luxury: "luxuryTheme",
//   default: "defaultTheme",
// };

// export function getTheme(categoryKey) {
//   return themeRegistry[categoryKey] || "defaultTheme";
// }

import defaultTheme from "./themes/default";
import mobileTheme from "./themes/mobile";
import pharmacyTheme from "./themes/pharmacy";
import restaurantTheme from "./themes/restaurant";
import fashionTheme from "./themes/fashion";
import furnitureTheme from "./themes/furniture";
import jewelleryTheme from "./themes/jewellery";
import luxuryTheme from "./themes/luxury";

const themeRegistry = {
  default: defaultTheme,
  mobile: mobileTheme,
  pharmacy: pharmacyTheme,
  restaurant: restaurantTheme,
  fashion: fashionTheme,
  furniture: furnitureTheme,
  jewellery: jewelleryTheme,
  luxury: luxuryTheme,
};

export function getTheme(categoryKey = "default") {
  return themeRegistry[categoryKey] || themeRegistry.default;
}
