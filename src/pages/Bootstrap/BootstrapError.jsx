import "./BootstrapErrorPage.css";

export default function BootstrapErrorPage({ error }) {
  const hostname = window.location.hostname;

  const message =
    error?.response?.data?.message ||
    error?.message ||
    "Unable to initialize the storefront.";

  return (
    <main className="bootstrap-error">
      <section className="bootstrap-error-card">
        <div className="bootstrap-error-icon">⚠️</div>

        <p className="bootstrap-error-label">SyncWare Platform</p>

        <h1 className="bootstrap-error-title">Unable to Load Storefront</h1>

        <p className="bootstrap-error-description">
          We encountered a problem while preparing this storefront. This is
          usually temporary. Please try again in a few moments.
        </p>

        <div className="bootstrap-error-host">{hostname}</div>

        <div className="bootstrap-error-details">
          <strong>Error</strong>

          <p>{message}</p>
        </div>

        <div className="bootstrap-error-actions">
          <button
            className="primary-btn"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>

          <a href="https://syncware.fun" className="secondary-btn">
            Visit SyncWare
          </a>
        </div>

        <p className="bootstrap-error-footer">
          If this problem continues, please contact the business owner or try
          again later.
        </p>
      </section>
    </main>
  );
}
