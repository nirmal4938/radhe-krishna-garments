import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./routes";

// Pages
import Home from "../pages/Home/Index";
import Products from "../pages/Products/Index";
import Collections from "../pages/Collections/Index";
import Offers from "../pages/Offers/Index";
import About from "../pages/About/Index";
import Contact from "../pages/Contact/Index";
import NotFound from "../pages/NotFound/Index";

// Layout
import PublicLayout from "../layouts/PublicLayout";

const pageMap = {
  Home,
  Products,
  Collections,
  Offers,
  About,
  Contact,
  NotFound,
};

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ALL PUBLIC ROUTES WRAPPED IN LAYOUT */}
        <Route element={<PublicLayout />}>
          {routes
            .filter((r) => r.layout === "public")
            .map((route) => {
              const Page = pageMap[route.page];
              return (
                <Route key={route.path} path={route.path} element={<Page />} />
              );
            })}
        </Route>

        {/* fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
