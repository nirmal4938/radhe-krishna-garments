export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
          <span className="text-2xl">🔍</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>

        {/* Message */}
        <p className="mt-3 text-gray-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => window.history.back()}
            className="rounded-lg border px-4 py-2 text-gray-700 transition hover:bg-gray-100"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            Go Home
          </button>
        </div>

        {/* Footer hint */}
        <p className="mt-6 text-xs text-gray-400">
          Check the URL or return to the homepage.
        </p>
      </div>
    </main>
  );
}
