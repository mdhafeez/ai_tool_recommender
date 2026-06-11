import { formatText } from "../data/i18n.js";

export default function ProgressBar({ current, total, translations }) {
  const progress = (current / total) * 100;
  const progressLabel = formatText(translations.questionProgress, { current, total });

  return (
    <div className="progress-block" aria-label={progressLabel}>
      <div className="progress-label">
        <span>{progressLabel}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
