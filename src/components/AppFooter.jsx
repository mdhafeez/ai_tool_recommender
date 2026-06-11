const currentYear = 2026;

export default function AppFooter({ translations }) {
  return (
    <footer className="app-footer">
      <p>{translations.footer || `Copyright ${currentYear} CoE Latihan AI Sektor Awam`}</p>
    </footer>
  );
}
