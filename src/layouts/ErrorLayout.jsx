import { Outlet } from "react-router-dom";

/**
 * ErrorLayout
 *
 * Layout used for application error pages.
 *
 * Examples:
 * - 500 Internal Server Error
 * - Service Unavailable
 * - Maintenance Page
 * - React Error Boundary
 */
export default function ErrorLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-2xl">
        <Outlet />
      </div>
    </div>
  );
}
