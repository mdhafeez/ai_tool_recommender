export const basicEthicsQuestions = [
  {
    id: "basic_ethics_data",
    sectionLabel: "Kesediaan etika",
    text: {
      ms: "Adakah anda akan menggunakan AI dengan dokumen atau data yang sensitif?"
    },
    options: [
      {
        label: { ms: "Ya, melibatkan data rasmi, sulit atau peribadi" },
        ethicsRisk: 3
      },
      {
        label: { ms: "Kadang-kadang, bergantung kepada tugasan" },
        ethicsRisk: 2
      },
      {
        label: { ms: "Tidak, hanya untuk idea umum dan tugasan terbuka" },
        ethicsRisk: 0
      },
      {
        label: { ms: "Tidak pasti" },
        ethicsRisk: 2
      }
    ]
  },
  {
    id: "basic_ethics_governance",
    sectionLabel: "Kesediaan etika",
    text: {
      ms: "Adakah organisasi anda sudah mempunyai garis panduan penggunaan AI?"
    },
    options: [
      {
        label: { ms: "Ya, sudah ada dan pengguna mematuhinya" },
        ethicsRisk: 0
      },
      {
        label: { ms: "Ada, tetapi masih belum jelas kepada semua pengguna" },
        ethicsRisk: 1
      },
      {
        label: { ms: "Belum ada" },
        ethicsRisk: 3
      },
      {
        label: { ms: "Tidak pasti" },
        ethicsRisk: 2
      }
    ]
  },
  {
    id: "basic_ethics_review",
    sectionLabel: "Kesediaan etika",
    text: {
      ms: "Bagaimana output AI akan digunakan?"
    },
    options: [
      {
        label: { ms: "Sebagai draf awal sahaja dan akan disemak manusia" },
        ethicsRisk: 0
      },
      {
        label: { ms: "Terus digunakan tanpa semakan besar" },
        ethicsRisk: 3
      },
      {
        label: { ms: "Digunakan untuk menyokong keputusan penting" },
        ethicsRisk: 3
      },
      {
        label: { ms: "Digunakan untuk idea, brainstorming dan pembelajaran" },
        ethicsRisk: 0
      }
    ]
  }
];
