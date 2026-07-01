import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./routes";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Collections from "../pages/Collections";
import Offers from "../pages/Offers";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

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
