export const initialScore = {
  chatgpt_codex: 0,
  claude_claude_code: 0,
  gemini_workspace: 0
};

export function calculateScores(answers, questions) {
  return questions.reduce(
    (scoreTotals, question) => {
      const selectedOptionIndex = answers[question.id];
      const selectedOption = question.options[selectedOptionIndex];

      if (!selectedOption) {
        return scoreTotals;
      }

      Object.entries(selectedOption.scores).forEach(([platformKey, points]) => {
        scoreTotals[platformKey] += points;
      });

      return scoreTotals;
    },
    { ...initialScore }
  );
}

export function getScoreDifference(firstScore, secondScore) {
  return Math.abs(firstScore - secondScore);
}

export function getRecommendation(scores) {
  const ranked = Object.entries(scores)
    .map(([key, score]) => ({
      key,
      score
    }))
    .sort((first, second) => second.score - first.score || first.key.localeCompare(second.key));

  const top = ranked[0];
  const secondary = ranked[1];
  const scoreRange = ranked[0].score - ranked[ranked.length - 1].score;
  const topDifference = getScoreDifference(top.score, secondary.score);

  return {
    ranked,
    top,
    secondary,
    isCloseTopTwo: topDifference <= 3,
    areAllClose: scoreRange <= 3
  };
}
