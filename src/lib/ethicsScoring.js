export function calculateBasicEthicsRisk(answers, questions) {
  const score = questions.reduce((total, question) => {
    const selectedOption = question.options[answers[question.id]];
    return total + (selectedOption?.ethicsRisk ?? 0);
  }, 0);

  return {
    score,
    status: getBasicEthicsStatus(score),
    message: getBasicEthicsMessage(score)
  };
}

export function getBasicEthicsStatus(score) {
  if (score <= 2) return "Baik";
  if (score <= 5) return "Sederhana";
  return "Perlu Perhatian";
}

export function getBasicEthicsMessage(score) {
  const status = getBasicEthicsStatus(score);

  if (status === "Baik") {
    return "Berdasarkan jawapan anda, tahap kesediaan etika penggunaan AI adalah baik. Penggunaan AI boleh diteruskan dengan syarat output tetap disemak dan penggunaan data masih mematuhi polisi organisasi.";
  }

  if (status === "Sederhana") {
    return "Berdasarkan jawapan anda, tahap kesediaan etika penggunaan AI adalah sederhana. AI boleh digunakan untuk tugasan umum, tetapi organisasi perlu memastikan kawalan data, semakan manusia dan garis panduan penggunaan AI diperkukuh.";
  }

  return "Berdasarkan jawapan anda, terdapat risiko etika yang perlu diberi perhatian. Elakkan memasukkan data sulit, maklumat peribadi atau dokumen rasmi terperingkat ke dalam AI tanpa kebenaran. Pastikan output AI disemak manusia sebelum digunakan untuk tujuan rasmi atau keputusan penting.";
}

export function calculateAdvancedEthicsReport(answers, questions) {
  const items = questions.map((question) => {
    const selectedOption = question.options[answers[question.id]];
    const risk = selectedOption?.risk ?? 0;

    return {
      id: question.id,
      principle: question.principle,
      question: question.question,
      answer: selectedOption?.label ?? "Belum dijawab",
      risk,
      riskLevel: getQuestionRiskLevel(risk),
      guidance: question.guidance
    };
  });

  const score = items.reduce((total, item) => total + item.risk, 0);
  const focusAreas = items
    .filter((item) => item.risk > 0)
    .sort((first, second) => second.risk - first.risk)
    .map((item) => ({
      principle: item.principle,
      riskLevel: item.riskLevel,
      guidance: item.guidance
    }));
  const status = getAdvancedEthicsStatus(score);

  return {
    score,
    status,
    explanation: getAdvancedEthicsExplanation(score),
    focusAreas,
    items,
    followUpActions: getAdvancedEthicsFollowUpActions(status)
  };
}

export function getAdvancedEthicsStatus(score) {
  if (score <= 4) return "Baik";
  if (score <= 10) return "Sederhana";
  return "Perlu Perhatian";
}

export function getAdvancedEthicsExplanation(score) {
  const status = getAdvancedEthicsStatus(score);

  if (status === "Baik") {
    return "Secara keseluruhan, tahap kesediaan etika AI adalah baik. Penggunaan AI boleh diteruskan secara terkawal dengan semakan manusia, kawalan data dan pemantauan berkala.";
  }

  if (status === "Sederhana") {
    return "Secara keseluruhan, tahap kesediaan etika AI adalah sederhana. Penggunaan AI masih boleh diteruskan untuk tugasan yang sesuai, tetapi beberapa aspek seperti garis panduan, semakan manusia, ketelusan dan kawalan data perlu diperkukuh.";
  }

  return "Secara keseluruhan, terdapat beberapa risiko etika yang perlu diberi perhatian sebelum penggunaan AI diperluaskan. Organisasi disarankan menyediakan garis panduan, kawalan data, semakan manusia dan mekanisme akauntabiliti yang lebih jelas.";
}

export function getQuestionRiskLevel(risk) {
  if (risk === 0) return "Rendah";
  if (risk <= 2) return "Sederhana";
  return "Tinggi";
}

export function getAdvancedEthicsFollowUpActions(status) {
  if (status === "Baik") {
    return [
      "Teruskan semakan manusia untuk output penting.",
      "Pantau penggunaan AI secara berkala.",
      "Kemas kini garis panduan jika penggunaan AI diperluaskan.",
      "Pastikan kategori data sensitif terus dikawal."
    ];
  }

  if (status === "Sederhana") {
    return [
      "Sediakan atau perkemas garis panduan penggunaan AI.",
      "Kenal pasti kategori data yang tidak boleh dimasukkan ke dalam AI.",
      "Pastikan output AI disemak manusia.",
      "Rekod penggunaan AI untuk tugasan rasmi yang berkaitan.",
      "Jalankan pilot kecil sebelum penggunaan diperluaskan."
    ];
  }

  return [
    "Sediakan garis panduan penggunaan AI sebelum perluasan.",
    "Kenal pasti kategori data yang tidak boleh dimasukkan ke dalam AI.",
    "Pastikan output AI disemak manusia sebelum digunakan.",
    "Semak risiko bias dan ketepatan output.",
    "Pastikan manusia kekal bertanggungjawab terhadap keputusan akhir.",
    "Jalankan pilot kecil dengan kawalan data dan akauntabiliti yang jelas."
  ];
}
