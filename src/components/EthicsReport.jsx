const neutralDisclaimer =
  "Penilaian ini ialah panduan awal sahaja. Ia tidak menggantikan dasar rasmi organisasi, nasihat perundangan, garis panduan keselamatan data atau penilaian risiko yang lebih menyeluruh. Pemilihan dan penggunaan AI perlu mengambil kira dasar organisasi, keselamatan data, bajet, integrasi sistem dan keperluan pengguna sebenar.";

export default function EthicsReport({ report, onBackToQuestions, onBackToMainResult }) {
  const hasFocusAreas = report.focusAreas.length > 0;

  return (
    <main className="app-shell result-shell">
      <section className="result-header">
        <p className="section-label">Penilaian etika lanjutan</p>
        <h1>Laporan Ringkas Penilaian Etika AI</h1>
        <p>{report.explanation}</p>
      </section>

      <section className="result-grid">
        <article className="recommendation-card primary-recommendation">
          <p className="section-label">Status keseluruhan</p>
          <h2>{report.status}</h2>
          <p>Skor risiko etika: {report.score}</p>
        </article>
        <article className="recommendation-card">
          <p className="section-label">Cadangan tindakan susulan</p>
          <ul className="clean-list compact-list">
            {report.followUpActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <p className="section-label">Ringkasan keputusan</p>
          <h2>{hasFocusAreas ? "Aspek yang perlu diberi perhatian" : "Aspek yang baik"}</h2>
        </div>
        {hasFocusAreas ? (
          <>
            <p>
              Berdasarkan jawapan yang diberikan, aspek berikut wajar diberi perhatian semasa merancang penggunaan AI.
              Senarai ini adalah ringkasan prinsip, bukan penilaian terhadap mana-mana platform.
            </p>
            <div className="ethics-summary-grid">
              {report.focusAreas.map((item) => (
                <article className="ethics-summary-item" key={item.principle}>
                  <h3>{item.principle}</h3>
                  <p>
                    <strong>Tahap risiko:</strong> {item.riskLevel}
                  </p>
                  <p className="muted-note">{item.guidance}</p>
                </article>
              ))}
            </div>
          </>
        ) : (
          <p>
            Jawapan anda menunjukkan penggunaan AI mempunyai kawalan asas yang mencukupi dari segi semakan manusia,
            penggunaan data, ketelusan dan akauntabiliti. Teruskan pemantauan berkala jika penggunaan AI diperluaskan.
          </p>
        )}
      </section>

      <section className="disclaimer-box">
        <p className="section-label">Nota neutral</p>
        <p>{neutralDisclaimer}</p>
      </section>

      <div className="result-actions">
        <button className="secondary-button" type="button" onClick={onBackToQuestions}>
          Kembali
        </button>
        <button className="secondary-button" type="button" onClick={() => window.print()}>
          Cetak Laporan
        </button>
        <button className="primary-button" type="button" onClick={onBackToMainResult}>
          Kembali ke Cadangan AI
        </button>
      </div>
    </main>
  );
}
