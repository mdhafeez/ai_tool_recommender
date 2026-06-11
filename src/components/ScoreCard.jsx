export default function ScoreCard({ platform, score, rank }) {
  return (
    <article className="score-card">
      <div>
        <p className="score-rank">Kedudukan {rank}</p>
        <h3>{platform.scoreLabel}</h3>
      </div>
      <strong>{score} mata</strong>
    </article>
  );
}
