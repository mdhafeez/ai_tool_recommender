import { platforms } from "../data/platforms.js";

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
      score,
      platform: platforms[key]
    }))
    .sort((first, second) => second.score - first.score || first.platform.name.localeCompare(second.platform.name));

  const top = ranked[0];
  const secondary = ranked[1];
  const scoreRange = ranked[0].score - ranked[ranked.length - 1].score;
  const topDifference = getScoreDifference(top.score, secondary.score);

  return {
    ranked,
    top,
    secondary,
    isCloseTopTwo: topDifference <= 3,
    areAllClose: scoreRange <= 3,
    balanceMessage:
      scoreRange <= 3
        ? "Keputusan menunjukkan ketiga-tiga pilihan mempunyai kesesuaian yang hampir sama. Pemilihan akhir perlu dibuat berdasarkan ekosistem kerja, dasar data, bajet dan keperluan pengguna sebenar."
        : topDifference <= 3
          ? "Keputusan hampir seimbang. Anda disarankan menjalankan pilot kecil untuk membandingkan kedua-dua pilihan sebelum membuat langganan."
          : ""
  };
}
