import ScoreCard from "./ScoreCard.jsx";
import { platforms } from "../data/platforms.js";

export default function ResultPage({ recommendation, language, translations, onBack, onRestart }) {
  const { ranked, top, secondary, isCloseTopTwo, areAllClose } = recommendation;
  const platformText = platforms[language];
  const topPlatform = platformText[top.key];
  const secondaryPlatform = platformText[secondary.key];
  const balanceMessage = areAllClose ? translations.allClose : isCloseTopTwo ? translations.closeTopTwo : "";

  return (
    <main className="app-shell result-shell">
      <section className="result-header">
        <p className="section-label">{translations.resultLabel}</p>
        <h1>{translations.resultTitle}</h1>
        <p>{translations.resultIntro}</p>
      </section>

      {balanceMessage ? <div className="balance-box">{balanceMessage}</div> : null}

      <section className="result-grid">
        <article className="recommendation-card primary-recommendation">
          <p className="section-label">{translations.primaryRecommendation}</p>
          <h2>{topPlatform.name}</h2>
          <p>{topPlatform.reason}</p>
        </article>

        <article className="recommendation-card">
          <p className="section-label">{translations.secondaryRecommendation}</p>
          <h2>{secondaryPlatform.name}</h2>
          <p>{secondaryPlatform.shortDescription}</p>
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <p className="section-label">{translations.scoreSummary}</p>
          <h2>{translations.scoreComparison}</h2>
        </div>
        <div className="score-grid">
          {ranked.map((item, index) => (
            <ScoreCard
              key={item.key}
              platform={platformText[item.key]}
              score={item.score}
              rank={index + 1}
              translations={translations}
            />
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <article className="panel">
          <div className="panel-heading">
            <p className="section-label">{translations.suitableFor}</p>
            <h2>{topPlatform.name}</h2>
          </div>
          <ul className="clean-list">
            {topPlatform.suitableFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <p className="section-label">{translations.considerations}</p>
            <h2>{translations.reviewBeforeUse}</h2>
          </div>
          <ul className="clean-list">
            {topPlatform.considerations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel next-step-panel">
        <p className="section-label">{translations.nextStep}</p>
        <p>{topPlatform.nextStep}</p>
      </section>

      <section className="disclaimer-box">
        <p className="section-label">{translations.neutralNote}</p>
        <p>{translations.disclaimer}</p>
      </section>

      <div className="result-actions">
        <button className="secondary-button" type="button" onClick={onBack}>
          {translations.backToQuestions}
        </button>
        <button className="secondary-button" type="button" onClick={() => window.print()}>
          {translations.printResult}
        </button>
        <button className="primary-button" type="button" onClick={onRestart}>
          {translations.restart}
        </button>
      </div>
    </main>
  );
}
