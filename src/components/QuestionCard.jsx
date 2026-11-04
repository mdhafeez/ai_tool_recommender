import ProgressBar from "./ProgressBar.jsx";
import { formatText } from "../data/i18n.js";
import { MAX_SELECTIONS } from "../lib/scoring.js";

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedIndexes,
  language,
  translations,
  onSelectOption,
  onBack,
  onNext,
  isLastQuestion
}) {
  const questionText = question.text[language];
  const sectionLabel = question.sectionLabel || translations.assessmentLabel;
  const isMultiple = Boolean(question.multiple);
  const isAtLimit = isMultiple && selectedIndexes.length >= MAX_SELECTIONS;

  return (
    <section className="question-card">
      <ProgressBar current={questionNumber} total={totalQuestions} translations={translations} />

      <div className="question-content">
        <p className="section-label">{sectionLabel}</p>
        <h2>{questionText}</h2>
        {isMultiple ? (
          <p className="multi-hint" aria-live="polite">
            <span>{formatText(translations.multiHint, { max: MAX_SELECTIONS })}</span>
            <span className="multi-count">
              {formatText(translations.multiCount, { count: selectedIndexes.length, max: MAX_SELECTIONS })}
            </span>
          </p>
        ) : null}
        <div
          className={`option-list ${isMultiple ? "is-multiple" : ""}`}
          role={isMultiple ? "group" : "radiogroup"}
          aria-label={questionText}
        >
          {question.options.map((option, optionIndex) => {
            const isSelected = selectedIndexes.includes(optionIndex);
            // At the limit, only already-chosen answers (to untick) or an exclusive answer stay clickable.
            const isDisabled = isAtLimit && !isSelected && !option.exclusive;
            const optionLabel = option.label[language];

            return (
              <button
                className={`option-button ${isSelected ? "selected" : ""}`}
                key={`${question.id}-${optionIndex}`}
                type="button"
                role={isMultiple ? "checkbox" : "radio"}
                aria-checked={isSelected}
                disabled={isDisabled}
                onClick={() => onSelectOption(optionIndex)}
              >
                <span className="option-marker">
                  {isMultiple && isSelected ? "✓" : String.fromCharCode(65 + optionIndex)}
                </span>
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
        <button className="primary-button" type="button" onClick={onNext} disabled={selectedIndexes.length === 0}>
          {isLastQuestion ? translations.viewRecommendationButton : translations.nextButton}
        </button>
      </div>
    </section>
  );
}
