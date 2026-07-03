import { Link, useLocation } from "react-router-dom";
import { useContext, useMemo, useState } from "react";

import StorefrontContext from "../../context/StorefrontContext";

const DEFAULT_NAVIGATION = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Collections", path: "/collections" },
  { label: "Offers", path: "/offers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const { business, navigation } = useContext(StorefrontContext);

  const displayName = business?.name || "Store";

  const logoUrl = business?.logoUrl || null;

  const navItems = useMemo(() => {
    if (Array.isArray(navigation?.header) && navigation.header.length > 0) {
      return navigation.header;
    }

    return DEFAULT_NAVIGATION;
  }, [navigation]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      {/* Top Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={displayName}
              className="h-10 w-10 rounded-lg object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-sm font-semibold text-white">
              {displayName.charAt(0).toUpperCase()}
            </div>
          )}

          <span className="text-xl font-bold tracking-tight">
            {displayName}
          </span>
        </Link>

        {/* Search */}
        <div className="hidden max-w-xl flex-1 md:flex">
          <input
            type="text"
            placeholder={`Search in ${displayName}...`}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-black"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="relative rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800">
            Cart
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              0
            </span>
          </button>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-lg border px-3 py-2 md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden border-t border-gray-200 md:block">
        <nav className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`border-b-2 pb-1 text-sm font-medium transition-all ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="space-y-3 border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <input
            type="text"
            placeholder={`Search in ${displayName}...`}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
          />

          <div className="flex flex-col gap-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition ${
                  location.pathname === item.path
                    ? "font-semibold text-black"
                    : "text-gray-700 hover:text-black"
                }`}
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
