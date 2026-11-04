import { formatText } from "../data/i18n.js";

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="brand-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.5" stopColor="#2563eb" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#brand-gradient)" />
      <path d="M16 5.5 18.6 13.4 26.5 16 18.6 18.6 16 26.5 13.4 18.6 5.5 16 13.4 13.4Z" fill="#ffffff" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="button-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const metaIcons = [
  // questions
  <path key="q" d="M5 4h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm2 4h6M7 11h4" />,
  // duration
  <path key="d" d="M10 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM10 6.5V10l2.5 1.5" />,
  // privacy
  <path key="p" d="M10 3 15.5 5v4.5c0 3.3-2.3 6-5.5 7-3.2-1-5.5-3.7-5.5-7V5L10 3Zm-2.2 7 1.6 1.6 3-3.2" />
];

export default function LandingPage({ onStart, translations: t, questionCount, platformNames }) {
  const meta = [
    formatText(t.metaQuestions, { count: questionCount }),
    t.metaDuration,
    t.metaPrivacy
  ];

  return (
    <main className="landing">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <BrandMark />
            <span className="brand-name">{t.title}</span>
          </div>
          <span className="org-pill">{t.organisation}</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              {t.eyebrow}
            </span>
            <h1 className="hero-title">
              {t.heroLead} <span className="gradient-text">{t.heroAccent}</span>
            </h1>
            <p className="hero-subtitle">{t.subtitle}</p>

            <div className="hero-actions">
              <button className="primary-button hero-cta" type="button" onClick={onStart}>
                {t.startButton}
                <ArrowIcon />
              </button>
              <a className="text-link" href="#cara-ia-berfungsi">
                {t.howItWorksLink}
              </a>
            </div>

            <ul className="hero-meta">
              {meta.map((item, index) => (
                <li key={item}>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    {metaIcons[index]}
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-glow" />
            <div className="visual-card">
              <img className="visual-logo" src="/images/logo_aitool.png" alt="" />
            </div>
            <div className="float-card float-card-top">
              <span className="float-label">{t.previewPrimary}</span>
              {/* Generic bars only: the landing page must not appear to favour any platform. */}
              {[88, 64, 41].map((width, index) => (
                <span className={`float-bar float-bar-${index + 1}`} key={width}>
                  <span style={{ width: `${width}%` }} />
                </span>
              ))}
            </div>
            <div className="float-card float-card-bottom">
              <span className="float-label">{t.previewEthics}</span>
              <span className="float-status">{t.previewEthicsValue}</span>
            </div>
            <span className="visual-caption">{t.previewLabel}</span>
          </div>
        </div>
      </section>

      <section className="landing-section" id="cara-ia-berfungsi">
        <div className="section-inner">
          <p className="section-kicker">{t.howItWorksLabel}</p>
          <h2 className="section-title">{t.howItWorksTitle}</h2>
          <ol className="step-grid">
            {t.steps.map((step, index) => (
              <li className="step-card" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{formatText(step.text, { platformCount: platformNames.length })}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="landing-section landing-section-alt">
        <div className="section-inner">
          <p className="section-kicker">{t.platformsLabel}</p>
          <h2 className="section-title">{t.platformsTitle}</h2>
          <ul className="platform-chips">
            {platformNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="neutral-note">{t.introNote}</p>
        </div>
      </section>

      <section className="landing-section">
        <div className="section-inner">
          <div className="cta-band">
            <div>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
            </div>
            <button className="primary-button cta-band-button" type="button" onClick={onStart}>
              {t.startButton}
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
