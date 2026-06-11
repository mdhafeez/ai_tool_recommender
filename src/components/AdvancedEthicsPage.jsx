import ProgressBar from "./ProgressBar.jsx";
import EthicsReport from "./EthicsReport.jsx";
import { advancedEthicsQuestions } from "../data/advancedEthicsQuestions.js";
import { translations } from "../data/i18n.js";

const t = translations.ms;

export default function AdvancedEthicsPage({
  currentQuestionIndex,
  answers,
  report,
  showReport,
  onSelectOption,
  onBack,
  onNext,
  onBackToMainResult
}) {
  if (showReport) {
    return (
      <EthicsReport report={report} onBackToQuestions={onBack} onBackToMainResult={onBackToMainResult} />
    );
  }

  const question = advancedEthicsQuestions[currentQuestionIndex];
  const selectedOptionIndex = answers[question.id];
  const isLastQuestion = currentQuestionIndex === advancedEthicsQuestions.length - 1;

  return (
    <main className="app-shell">
      <section className="question-card">
        <div className="advanced-intro">
          <p className="section-label">Penilaian pilihan</p>
          <h1>Penilaian Etika AI Lanjutan</h1>
          <p>
            Bahagian ini adalah pilihan. Ia membantu pengguna menilai penggunaan AI dengan lebih terperinci berdasarkan
            prinsip etika AI seperti keadilan, keselamatan, privasi, keterangkuman, ketelusan, akauntabiliti dan
            kesejahteraan manusia.
          </p>
        </div>

        <ProgressBar current={currentQuestionIndex + 1} total={advancedEthicsQuestions.length} translations={t} />

        <div className="question-content">
          <p className="section-label">{question.principle}</p>
          <h2>{question.question}</h2>
          <p className="guidance-text">{question.guidance}</p>
          <div className="option-list" role="radiogroup" aria-label={question.question}>
            {question.options.map((option, optionIndex) => {
              const isSelected = selectedOptionIndex === optionIndex;

              return (
                <button
                  className={`option-button ${isSelected ? "selected" : ""}`}
                  key={option.label}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => onSelectOption(question.id, optionIndex)}
                >
                  <span className="option-marker">{String.fromCharCode(65 + optionIndex)}</span>
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="navigation-row">
          <button className="secondary-button" type="button" onClick={onBack}>
            Kembali
          </button>
          <button className="primary-button" type="button" onClick={onNext} disabled={selectedOptionIndex === undefined}>
            {isLastQuestion ? "Lihat Laporan Etika" : "Teruskan"}
          </button>
        </div>
      </section>
    </main>
  );
}
