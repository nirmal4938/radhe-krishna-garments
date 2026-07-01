import { Navigate, Outlet, useLocation } from "react-router-dom";

/**
 * ProtectedRoute
 *
 * Guards routes that require authentication.
 *
 * For the Storefront Engine:
 * - Public pages bypass this component.
 * - Admin or authenticated routes will use it later.
 */
export default function ProtectedRoute({
  isAuthenticated = false,
  redirectTo = "/",
  children,
}) {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  // Supports both:
  // <ProtectedRoute><Page /></ProtectedRoute>
  // and nested routes using <Outlet />
  return children || <Outlet />;
}
