const currentYear = 2026;

export default function AppFooter({ translations }) {
  return (
    <footer className="app-footer">
      <p>{translations.footer || `CoE Latihan AI Sektor Awam @ ${currentYear} | INTAN`}</p>
    </footer>
  );
}
