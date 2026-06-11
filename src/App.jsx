import { useMemo, useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import ResultPage from "./components/ResultPage.jsx";
import AppFooter from "./components/AppFooter.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import { questions } from "./data/questions.js";
import { translations } from "./data/i18n.js";
import { calculateScores, getRecommendation } from "./lib/scoring.js";

const initialAnswers = {};

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [showResult, setShowResult] = useState(false);
  const [language, setLanguage] = useState("ms");

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOptionIndex = answers[currentQuestion?.id];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const t = translations[language];

  const scores = useMemo(() => calculateScores(answers, questions), [answers]);
  const recommendation = useMemo(() => getRecommendation(scores), [scores]);

  function startAssessment() {
    setHasStarted(true);
    setShowResult(false);
    setCurrentQuestionIndex(0);
  }

  function selectOption(optionIndex) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: optionIndex
    }));
  }

  function goBack() {
    if (showResult) {
      setShowResult(false);
      setCurrentQuestionIndex(questions.length - 1);
      return;
    }

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((index) => index - 1);
    } else {
      setHasStarted(false);
    }
  }

  function goNext() {
    if (selectedOptionIndex === undefined) {
      return;
    }

    if (isLastQuestion) {
      setShowResult(true);
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
  }

  function restartAssessment() {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setHasStarted(false);
  }

  if (!hasStarted) {
    return (
      <div className="page-frame">
        <LanguageSwitcher language={language} onChangeLanguage={setLanguage} translations={t} />
        <LandingPage onStart={startAssessment} translations={t} />
        <AppFooter translations={t} />
      </div>
    );
  }

  if (showResult && Object.keys(answers).length === questions.length) {
    return (
      <div className="page-frame">
        <LanguageSwitcher language={language} onChangeLanguage={setLanguage} translations={t} />
        <ResultPage
          scores={scores}
          recommendation={recommendation}
          language={language}
          translations={t}
          onBack={goBack}
          onRestart={restartAssessment}
        />
        <AppFooter translations={t} />
      </div>
    );
  }

  return (
    <div className="page-frame">
      <LanguageSwitcher language={language} onChangeLanguage={setLanguage} translations={t} />
      <main className="app-shell">
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedOptionIndex={selectedOptionIndex}
          language={language}
          translations={t}
          onSelectOption={selectOption}
          onBack={goBack}
          onNext={goNext}
          isLastQuestion={isLastQuestion}
        />
      </main>
      <AppFooter translations={t} />
    </div>
  );
}
