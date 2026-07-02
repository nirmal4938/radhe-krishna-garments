import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <main className="bootstrap-splash">
      <section className="bootstrap-card">
        {/* Logo */}

        <div className="bootstrap-logo">
          <div className="bootstrap-logo__circle">SW</div>
        </div>

        {/* Heading */}

        <h1 className="bootstrap-title">SyncWare Storefront</h1>

        <p className="bootstrap-subtitle">
          Preparing your storefront experience...
        </p>

        {/* Progress */}

        <div className="bootstrap-progress">
          <div className="bootstrap-progress__bar" />
        </div>

        {/* Bootstrap Steps */}

        <div className="bootstrap-steps">
          <div className="bootstrap-step active">
            ✓ Connecting to SyncWare Platform
          </div>

          <div className="bootstrap-step active">✓ Resolving Storefront</div>

          <div className="bootstrap-step">
            Loading Business Configuration...
          </div>

          <div className="bootstrap-step">Loading Theme & Branding...</div>

          <div className="bootstrap-step">
            Initializing Storefront Runtime...
          </div>
        </div>

        <p className="bootstrap-footer">
          Powered by <strong>SyncWare</strong>
        </p>
      </section>
    </main>
  );
}
