export default function LandingPage({ onStart, translations }) {
  return (
    <main className="app-shell landing-shell">
      <section className="intro-card">
        <div className="intro-layout">
          <div className="intro-copy">
            <div className="eyebrow">{translations.eyebrow}</div>
            <h1>{translations.title}</h1>
            <p className="subtitle">{translations.subtitle}</p>
            <p className="intro-note">{translations.introNote}</p>
            <button className="primary-button intro-cta" type="button" onClick={onStart}>
              {translations.startButton}
            </button>
          </div>
          <div className="intro-logo-panel">
            <img className="app-logo" src="/images/logo_aitool.png" alt="Logo AI Tool" />
          </div>
        </div>
      </section>
    </main>
  );
}
