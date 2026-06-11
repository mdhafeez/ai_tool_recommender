import { formatText } from "../data/i18n.js";

export default function ScoreCard({ platform, score, rank, translations }) {
  return (
    <article className="score-card">
      <div>
        <p className="score-rank">{formatText(translations.rankLabel, { rank })}</p>
        <h3>{platform.scoreLabel}</h3>
      </div>
      <strong>{formatText(translations.pointsLabel, { score })}</strong>
    </article>
  );
}
