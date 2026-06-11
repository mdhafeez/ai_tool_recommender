export default function EthicsStatusCard({ ethicsSummary, onStartAdvancedEthics }) {
  return (
    <section className="panel ethics-panel">
      <div className="panel-heading">
        <p className="section-label">Kesediaan etika</p>
        <h2>Kesediaan Etika Penggunaan AI</h2>
      </div>
      <div className={`status-badge status-${ethicsSummary.status.toLowerCase().replace(" ", "-")}`}>
        {ethicsSummary.status}
      </div>
      <p>{ethicsSummary.message}</p>
      <p className="muted-note">
        Penilaian etika ringkas ini tidak menentukan platform mana yang lebih baik. Ia bertujuan membantu pengguna
        menilai tahap kesediaan penggunaan AI secara bertanggungjawab.
      </p>
      <button className="secondary-button" type="button" onClick={onStartAdvancedEthics}>
        Semak Etika AI Dengan Lebih Terperinci
      </button>
    </section>
  );
}
