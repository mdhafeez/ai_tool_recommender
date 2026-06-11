export default function LandingPage({ onStart }) {
  return (
    <main className="app-shell landing-shell">
      <section className="intro-card">
        <div className="eyebrow">Alat penilaian ringkas</div>
        <h1>Penasihat Pilihan AI</h1>
        <p className="subtitle">
          Jawab beberapa soalan ringkas untuk mendapatkan cadangan AI yang lebih sesuai berdasarkan keperluan kerja, tahap
          teknikal dan persekitaran organisasi anda.
        </p>
        <p className="intro-note">
          Alat ini bukan penilaian mutlak antara platform. Ia hanya membantu mencadangkan pilihan yang lebih sesuai
          berdasarkan jawapan anda.
        </p>
        <button className="primary-button" type="button" onClick={onStart}>
          Mula Penilaian
        </button>
      </section>
    </main>
  );
}
