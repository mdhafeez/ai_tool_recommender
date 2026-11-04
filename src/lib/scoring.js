export const platformKeys = [
  "chatgpt_codex",
  "claude_claude_code",
  "gemini_workspace",
  "microsoft_copilot",
  "kimi",
  "deepseek",
  "perplexity",
  "github_copilot",
  "open_source_llm"
];

export const initialScore = platformKeys.reduce((scores, key) => {
  scores[key] = 0;
  return scores;
}, {});

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
    .sort((first, second) => second.score - first.score || first.key.localeCompare(second.key))
    // Tied scores share a rank (1, 1, 3, ...); alphabetical order above only decides display order.
    .map((item, index, items) => ({
      ...item,
      rank: items.findIndex((other) => other.score === item.score) + 1
    }));

  const top = ranked[0];
  const secondary = ranked[1];
  const topDifference = getScoreDifference(top.score, secondary.score);
  // With 9 platforms, "all scores within 3 points" can practically never happen,
  // so compare the top three instead (matches the "tiga pilihan teratas" message).
  const topThreeRange = getScoreDifference(top.score, ranked[2].score);

  return {
    ranked,
    top,
    secondary,
    isTopTie: topDifference === 0,
    isCloseTopTwo: topDifference <= 3,
    areTopThreeClose: topThreeRange <= 3
  };
}
