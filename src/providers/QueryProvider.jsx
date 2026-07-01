/**
 * ============================================================
 * SyncWare Storefront Engine
 * Query Provider
 * ============================================================
 *
 * Purpose
 * -------
 * Central place for server-state management.
 *
 * Current:
 * - Simple passthrough provider.
 *
 * Future:
 * - TanStack Query
 * - React Query Devtools
 * - Global query configuration
 * - Automatic caching
 * - Background refetching
 * - Request deduplication
 * - Retry strategy
 * - Offline support
 */

export default function QueryProvider({ children }) {
  return children;
}
