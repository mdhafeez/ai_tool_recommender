import { useMemo, useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import ResultPage from "./components/ResultPage.jsx";
import AppFooter from "./components/AppFooter.jsx";
import AdvancedEthicsPage from "./components/AdvancedEthicsPage.jsx";
import { questions } from "./data/questions.js";
import { basicEthicsQuestions } from "./data/basicEthicsQuestions.js";
import { advancedEthicsQuestions } from "./data/advancedEthicsQuestions.js";
import { translations } from "./data/i18n.js";
import { calculateScores, getRecommendation } from "./lib/scoring.js";
import { calculateAdvancedEthicsReport, calculateBasicEthicsRisk } from "./lib/ethicsScoring.js";

const initialAnswers = {};
const language = "ms";
const assessmentQuestions = [...questions, ...basicEthicsQuestions];

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [showResult, setShowResult] = useState(false);
  const [showAdvancedEthics, setShowAdvancedEthics] = useState(false);
  const [advancedQuestionIndex, setAdvancedQuestionIndex] = useState(0);
  const [advancedAnswers, setAdvancedAnswers] = useState({});
  const [showAdvancedReport, setShowAdvancedReport] = useState(false);

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const selectedOptionIndex = answers[currentQuestion?.id];
  const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
  const t = translations[language];

  const scores = useMemo(() => calculateScores(answers, questions), [answers]);
  const recommendation = useMemo(() => getRecommendation(scores), [scores]);
  const ethicsSummary = useMemo(
    () => calculateBasicEthicsRisk(answers, basicEthicsQuestions),
    [answers]
  );
  const advancedEthicsReport = useMemo(
    () => calculateAdvancedEthicsReport(advancedAnswers, advancedEthicsQuestions),
    [advancedAnswers]
  );

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
      setCurrentQuestionIndex(assessmentQuestions.length - 1);
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
    setShowAdvancedEthics(false);
    setAdvancedQuestionIndex(0);
    setAdvancedAnswers({});
    setShowAdvancedReport(false);
  }

  function startAdvancedEthics() {
    setShowAdvancedEthics(true);
    setShowAdvancedReport(false);
    setAdvancedQuestionIndex(0);
  }

  function selectAdvancedOption(questionId, optionIndex) {
    setAdvancedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: optionIndex
    }));
  }

  function goBackAdvancedEthics() {
    if (showAdvancedReport) {
      setShowAdvancedReport(false);
      setAdvancedQuestionIndex(advancedEthicsQuestions.length - 1);
      return;
    }

    if (advancedQuestionIndex > 0) {
      setAdvancedQuestionIndex((index) => index - 1);
      return;
    }

    setShowAdvancedEthics(false);
  }

  function goNextAdvancedEthics() {
    const currentAdvancedQuestion = advancedEthicsQuestions[advancedQuestionIndex];
    if (advancedAnswers[currentAdvancedQuestion.id] === undefined) {
      return;
    }

    if (advancedQuestionIndex === advancedEthicsQuestions.length - 1) {
      setShowAdvancedReport(true);
      return;
    }

    setAdvancedQuestionIndex((index) => index + 1);
  }

  function returnToMainResult() {
    setShowAdvancedEthics(false);
    setShowAdvancedReport(false);
  }

  if (!hasStarted) {
    return (
      <div className="page-frame">
        <LandingPage onStart={startAssessment} translations={t} />
        <AppFooter translations={t} />
      </div>
    );
  }

  if (showAdvancedEthics) {
    return (
      <div className="page-frame">
        <AdvancedEthicsPage
          currentQuestionIndex={advancedQuestionIndex}
          answers={advancedAnswers}
          report={advancedEthicsReport}
          showReport={showAdvancedReport}
          onSelectOption={selectAdvancedOption}
          onBack={goBackAdvancedEthics}
          onNext={goNextAdvancedEthics}
          onBackToMainResult={returnToMainResult}
        />
        <AppFooter translations={t} />
      </div>
    );
  }

  if (showResult && Object.keys(answers).length === assessmentQuestions.length) {
    return (
      <div className="page-frame">
        <ResultPage
          scores={scores}
          recommendation={recommendation}
          language={language}
          translations={t}
          ethicsSummary={ethicsSummary}
          onStartAdvancedEthics={startAdvancedEthics}
          onBack={goBack}
          onRestart={restartAssessment}
        />
        <AppFooter translations={t} />
      </div>
    );
  }

  return (
    <div className="page-frame">
      <main className="app-shell">
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={assessmentQuestions.length}
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
