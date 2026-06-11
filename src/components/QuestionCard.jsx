import ProgressBar from "./ProgressBar.jsx";

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionIndex,
  language,
  translations,
  onSelectOption,
  onBack,
  onNext,
  isLastQuestion
}) {
  const questionText = question.text[language];

  return (
    <section className="question-card">
      <ProgressBar current={questionNumber} total={totalQuestions} translations={translations} />

      <div className="question-content">
        <p className="section-label">{translations.assessmentLabel}</p>
        <h2>{questionText}</h2>
        <div className="option-list" role="radiogroup" aria-label={questionText}>
          {question.options.map((option, optionIndex) => {
            const isSelected = selectedOptionIndex === optionIndex;
            const optionLabel = option.label[language];

            return (
              <button
                className={`option-button ${isSelected ? "selected" : ""}`}
                key={`${question.id}-${optionIndex}`}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelectOption(optionIndex)}
              >
                <span className="option-marker">{String.fromCharCode(65 + optionIndex)}</span>
                <span>{optionLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="navigation-row">
        <button className="secondary-button" type="button" onClick={onBack}>
          {translations.backButton}
        </button>
        <button className="primary-button" type="button" onClick={onNext} disabled={selectedOptionIndex === undefined}>
          {isLastQuestion ? translations.viewRecommendationButton : translations.nextButton}
        </button>
      </div>
    </section>
  );
}
