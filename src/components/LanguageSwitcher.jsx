export default function LanguageSwitcher({ language, onChangeLanguage, translations }) {
  return (
    <div className="language-switcher" aria-label={translations.languageToggleLabel}>
      <button
        className={language === "ms" ? "active" : ""}
        type="button"
        onClick={() => onChangeLanguage("ms")}
        aria-pressed={language === "ms"}
      >
        BM
      </button>
      <button
        className={language === "en" ? "active" : ""}
        type="button"
        onClick={() => onChangeLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
