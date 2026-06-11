import ProgressBar from "./ProgressBar.jsx";

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionIndex,
  onSelectOption,
  onBack,
  onNext,
  isLastQuestion
}) {
  return (
    <section className="question-card">
      <ProgressBar current={questionNumber} total={totalQuestions} />

      <div className="question-content">
        <p className="section-label">Penilaian keperluan</p>
        <h2>{question.text}</h2>
        <div className="option-list" role="radiogroup" aria-label={question.text}>
          {question.options.map((option, optionIndex) => {
            const isSelected = selectedOptionIndex === optionIndex;

            return (
              <button
                className={`option-button ${isSelected ? "selected" : ""}`}
                key={option.label}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelectOption(optionIndex)}
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
          {isLastQuestion ? "Lihat Cadangan" : "Seterusnya"}
        </button>
      </div>
    </section>
  );
}
