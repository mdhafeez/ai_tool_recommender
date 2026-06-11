export default function LandingPage({ onStart, translations }) {
  return (
    <main className="app-shell landing-shell">
      <section className="intro-card">
        <div className="eyebrow">{translations.eyebrow}</div>
        <h1>{translations.title}</h1>
        <p className="subtitle">{translations.subtitle}</p>
        <p className="intro-note">{translations.introNote}</p>
        <button className="primary-button" type="button" onClick={onStart}>
          {translations.startButton}
        </button>
      </section>
    </main>
  );
}
