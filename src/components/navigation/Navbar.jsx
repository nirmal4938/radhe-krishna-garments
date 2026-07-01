import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { BusinessContext } from "../../context/BusinessContext";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔥 BUSINESS CONTEXT (TENANT AWARE)
  const { business } = useContext(BusinessContext);
  const { displayName, logoUrl } = useContext(BusinessContext);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Collections", path: "/collections" },
    { label: "Offers", path: "/offers" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      {/* TOP BAR */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* BRAND (DYNAMIC) */}
        <Link to="/" className="flex items-center gap-2">
          {/* LOGO */}
          {business?.logo ? (
            <img
              src={logoUrl}
              alt="logo"
              className="h-8 w-8 rounded object-cover"
            />
          ) : (
            <div className="h-8 w-8 rounded bg-black" />
          )}

          {/* NAME */}
          <span className="text-xl font-bold tracking-tight">
            {displayName}
          </span>
        </Link>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <input
            type="text"
            placeholder={`Search in ${business?.name || "store"}...`}
            className="w-full rounded-lg border px-4 py-2 text-sm outline-none focus:border-black"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button className="relative rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
            Cart
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
              0
            </span>
          </button>

          <button
            className="md:hidden rounded-lg border px-3 py-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* NAV */}
      <div className="hidden md:block border-t">
        <nav className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-black border-b-2 border-black pb-1"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* MOBILE */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-3">
          <input
            type="text"
            placeholder={`Search in ${business?.name || "store"}...`}
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />

          <div className="flex flex-col gap-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-700 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
