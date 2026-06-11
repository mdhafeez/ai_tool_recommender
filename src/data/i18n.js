export const translations = {
  ms: {
    languageName: "Bahasa Malaysia",
    languageToggleLabel: "Pilih bahasa",
    eyebrow: "Alat penilaian ringkas",
    title: "Penasihat Pilihan AI",
    subtitle:
      "Jawab beberapa soalan ringkas untuk mendapatkan cadangan AI yang lebih sesuai berdasarkan keperluan kerja, tahap teknikal dan persekitaran organisasi anda.",
    introNote:
      "Alat ini bukan penilaian mutlak antara platform. Ia hanya membantu mencadangkan pilihan yang lebih sesuai berdasarkan jawapan anda.",
    startButton: "Mula Penilaian",
    assessmentLabel: "Penilaian keperluan",
    questionProgress: "Soalan {current} daripada {total}",
    backButton: "Kembali",
    nextButton: "Seterusnya",
    viewRecommendationButton: "Lihat Cadangan",
    resultLabel: "Keputusan penilaian",
    resultTitle: "Cadangan Paling Sesuai Berdasarkan Keperluan Anda",
    resultIntro:
      "Cadangan ini dikira secara automatik berdasarkan jawapan yang dipilih. Gunakan keputusan ini sebagai panduan awal sebelum menjalankan pilot sebenar.",
    primaryRecommendation: "Cadangan utama",
    secondaryRecommendation: "Pilihan kedua yang juga boleh dipertimbangkan",
    scoreSummary: "Skor ringkas",
    scoreComparison: "Perbandingan mata",
    rankLabel: "Kedudukan {rank}",
    pointsLabel: "{score} mata",
    suitableFor: "Sesuai untuk siapa",
    considerations: "Perkara yang perlu diberi perhatian",
    reviewBeforeUse: "Semakan sebelum guna",
    nextStep: "Cadangan tindakan seterusnya",
    neutralNote: "Nota neutral",
    backToQuestions: "Kembali ke soalan",
    printResult: "Cetak Keputusan",
    restart: "Mula Semula",
    closeTopTwo:
      "Keputusan hampir seimbang. Anda disarankan menjalankan pilot kecil untuk membandingkan kedua-dua pilihan sebelum membuat langganan.",
    allClose:
      "Keputusan menunjukkan ketiga-tiga pilihan mempunyai kesesuaian yang hampir sama. Pemilihan akhir perlu dibuat berdasarkan ekosistem kerja, dasar data, bajet dan keperluan pengguna sebenar.",
    disclaimer:
      "Penilaian ini ialah panduan awal sahaja. Ia tidak menggantikan dasar rasmi organisasi, nasihat perundangan, garis panduan keselamatan data atau penilaian risiko yang lebih menyeluruh. Pemilihan dan penggunaan AI perlu mengambil kira dasar organisasi, keselamatan data, bajet, integrasi sistem dan keperluan pengguna sebenar.",
    footer: "Copyright 2026 CoE Latihan AI Sektor Awam"
  },
  en: {
    languageName: "English",
    languageToggleLabel: "Choose language",
    eyebrow: "Short assessment tool",
    title: "AI Choice Advisor",
    subtitle:
      "Answer a few short questions to receive an AI recommendation that better matches your work needs, technical level and organizational environment.",
    introNote:
      "This tool is not an absolute assessment of platforms. It only helps suggest a more suitable option based on your answers.",
    startButton: "Start Assessment",
    assessmentLabel: "Needs assessment",
    questionProgress: "Question {current} of {total}",
    backButton: "Back",
    nextButton: "Next",
    viewRecommendationButton: "View Recommendation",
    resultLabel: "Assessment result",
    resultTitle: "Most Suitable Recommendation Based on Your Needs",
    resultIntro:
      "This recommendation is calculated automatically based on your selected answers. Use it as an initial guide before running a real pilot.",
    primaryRecommendation: "Primary recommendation",
    secondaryRecommendation: "Second option to consider",
    scoreSummary: "Score summary",
    scoreComparison: "Score comparison",
    rankLabel: "Rank {rank}",
    pointsLabel: "{score} points",
    suitableFor: "Suitable for",
    considerations: "Things to consider",
    reviewBeforeUse: "Review before use",
    nextStep: "Suggested next step",
    neutralNote: "Neutral note",
    backToQuestions: "Back to questions",
    printResult: "Print Result",
    restart: "Restart",
    closeTopTwo:
      "The result is closely balanced. You are advised to run a small pilot to compare both options before making a subscription decision.",
    allClose:
      "The result shows that all three options have a similar level of fit. The final selection should consider work ecosystem, data policy, budget and real user needs.",
    disclaimer:
      "This result is a recommendation based on the answers provided, not an absolute assessment that one platform is better than another. Each platform has its own strengths, and the final choice should consider organizational policy, data security, budget, system integration and real user needs.",
    footer: "Copyright 2026 CoE Latihan AI Sektor Awam"
  }
};

export function formatText(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replace(`{${key}}`, value), template);
}
