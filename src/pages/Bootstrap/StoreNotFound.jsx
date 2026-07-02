import "./StoreNotFoundPage.css";

export default function StoreNotFoundPage() {
  const hostname = window.location.hostname;

  return (
    <main className="store-not-found">
      <section className="store-card">
        <div className="store-icon">🏪</div>

        <p className="store-label">SyncWare Storefront</p>

        <h1 className="store-title">Store Not Found</h1>

        <p className="store-description">
          We couldn't find a storefront associated with this address.
        </p>

        <div className="store-hostname">{hostname}</div>

        <div className="store-message">This may happen because:</div>

        <ul className="store-reasons">
          <li>The store URL is incorrect.</li>
          <li>The business has been removed.</li>
          <li>The storefront is not yet published.</li>
          <li>The domain is still being configured.</li>
        </ul>

        <div className="store-actions">
          <a href="https://syncware.fun" className="primary-btn">
            Visit SyncWare
          </a>

          <button
            className="secondary-btn"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>

        <p className="store-footer">
          Powered by <strong>SyncWare Platform</strong>
        </p>
      </section>
    </main>
  );
}
