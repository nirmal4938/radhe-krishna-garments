import { Outlet } from "react-router-dom";

/**
 * EmptyLayout
 *
 * Minimal layout without:
 * - Navbar
 * - Footer
 * - Business branding
 *
 * Used for:
 * - Login
 * - Register
 * - OTP Verification
 * - Loading Screens
 * - Bootstrap Pages
 * - Standalone Views
 */
export default function EmptyLayout() {
  return (
    <main className="min-h-screen bg-white">
      <Outlet />
    </main>
  );
}
