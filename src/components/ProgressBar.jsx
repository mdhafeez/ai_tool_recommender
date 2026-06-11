export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="progress-block" aria-label={`Soalan ${current} daripada ${total}`}>
      <div className="progress-label">
        <span>Soalan {current} daripada {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
