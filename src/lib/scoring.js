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

// Questions flagged `multiple: true` accept up to this many answers.
export const MAX_SELECTIONS = 3;

// An answer is a single option index, or an array of indexes for multi-answer questions.
export function getSelectedIndexes(answer) {
  if (Array.isArray(answer)) return answer;
  return answer === undefined ? [] : [answer];
}

export function isQuestionAnswered(question, answers) {
  return getSelectedIndexes(answers[question.id]).length > 0;
}

export function calculateScores(answers, questions) {
  const totals = questions.reduce(
    (scoreTotals, question) => {
      const selectedOptions = getSelectedIndexes(answers[question.id])
        .map((index) => question.options[index])
        .filter(Boolean);

      // Multi-answer questions use the average of the chosen answers, so every question
      // keeps the same weight no matter how many answers are ticked. Adding them up instead
      // would reward all-round platforms that appear in many options.
      selectedOptions.forEach((option) => {
        Object.entries(option.scores).forEach(([platformKey, points]) => {
          scoreTotals[platformKey] += points / selectedOptions.length;
        });
      });

      return scoreTotals;
    },
    { ...initialScore }
  );

  // Averages can produce fractions; one decimal place keeps display and tie checks stable.
  return Object.fromEntries(Object.entries(totals).map(([key, score]) => [key, Math.round(score * 10) / 10]));
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
