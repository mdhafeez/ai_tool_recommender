import ScoreCard from "./ScoreCard.jsx";

const disclaimer =
  "Keputusan ini ialah cadangan berdasarkan jawapan yang diberikan, bukan penilaian mutlak bahawa satu platform lebih baik daripada platform lain. Setiap platform mempunyai kekuatan tersendiri dan pemilihan akhir perlu mengambil kira dasar organisasi, keselamatan data, bajet, integrasi sistem dan keperluan pengguna sebenar.";

export default function ResultPage({ recommendation, onBack, onRestart }) {
  const { ranked, top, secondary, balanceMessage } = recommendation;

  return (
    <main className="app-shell result-shell">
      <section className="result-header">
        <p className="section-label">Keputusan penilaian</p>
        <h1>Cadangan Paling Sesuai Berdasarkan Keperluan Anda</h1>
        <p>
          Cadangan ini dikira secara automatik berdasarkan jawapan yang dipilih. Gunakan keputusan ini sebagai panduan
          awal sebelum menjalankan pilot sebenar.
        </p>
      </section>

      {balanceMessage ? <div className="balance-box">{balanceMessage}</div> : null}

      <section className="result-grid">
        <article className="recommendation-card primary-recommendation">
          <p className="section-label">Cadangan utama</p>
          <h2>{top.platform.name}</h2>
          <p>{top.platform.reason}</p>
        </article>

        <article className="recommendation-card">
          <p className="section-label">Pilihan kedua yang juga boleh dipertimbangkan</p>
          <h2>{secondary.platform.name}</h2>
          <p>{secondary.platform.shortDescription}</p>
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <p className="section-label">Skor ringkas</p>
          <h2>Perbandingan mata</h2>
        </div>
        <div className="score-grid">
          {ranked.map((item, index) => (
            <ScoreCard key={item.key} platform={item.platform} score={item.score} rank={index + 1} />
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <article className="panel">
          <div className="panel-heading">
            <p className="section-label">Sesuai untuk siapa</p>
            <h2>{top.platform.name}</h2>
          </div>
          <ul className="clean-list">
            {top.platform.suitableFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <p className="section-label">Perkara yang perlu diberi perhatian</p>
            <h2>Semakan sebelum guna</h2>
          </div>
          <ul className="clean-list">
            {top.platform.considerations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel next-step-panel">
        <p className="section-label">Cadangan tindakan seterusnya</p>
        <p>{top.platform.nextStep}</p>
      </section>

      <section className="disclaimer-box">
        <p className="section-label">Nota neutral</p>
        <p>{disclaimer}</p>
      </section>

      <div className="result-actions">
        <button className="secondary-button" type="button" onClick={onBack}>
          Kembali ke soalan
        </button>
        <button className="secondary-button" type="button" onClick={() => window.print()}>
          Cetak Keputusan
        </button>
        <button className="primary-button" type="button" onClick={onRestart}>
          Mula Semula
        </button>
      </div>
    </main>
  );
}
