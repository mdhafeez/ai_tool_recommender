export const advancedEthicsQuestions = [
  {
    id: "fairness",
    principle: "Keadilan",
    question:
      "Adakah penggunaan AI ini berisiko menghasilkan keputusan yang berat sebelah atau tidak adil kepada kumpulan tertentu?",
    guidance:
      "Prinsip keadilan menekankan bahawa penggunaan AI tidak sepatutnya menyebabkan bias, diskriminasi atau layanan tidak adil kepada mana-mana kumpulan.",
    options: [
      { label: "Risiko rendah, output AI hanya digunakan untuk tugasan umum", risk: 0 },
      { label: "Ada sedikit risiko, tetapi output akan disemak manusia", risk: 1 },
      { label: "Risiko sederhana, kerana output mungkin mempengaruhi penilaian atau keputusan", risk: 2 },
      { label: "Tidak pasti", risk: 2 }
    ]
  },
  {
    id: "safety_control",
    principle: "Kebolehpercayaan, Keselamatan dan Kawalan",
    question: "Adakah terdapat kawalan manusia sebelum output AI digunakan untuk tugasan rasmi atau keputusan penting?",
    guidance:
      "Prinsip ini menekankan bahawa AI perlu digunakan secara selamat, boleh dipercayai dan masih berada di bawah kawalan manusia.",
    options: [
      { label: "Ya, semua output penting akan disemak dan diluluskan manusia", risk: 0 },
      { label: "Ada semakan, tetapi belum konsisten", risk: 1 },
      { label: "Tiada proses semakan yang jelas", risk: 3 },
      { label: "Tidak pasti", risk: 2 }
    ]
  },
  {
    id: "privacy_data",
    principle: "Privasi dan Keselamatan Data",
    question: "Adakah pengguna tahu jenis data yang tidak boleh dimasukkan ke dalam AI?",
    guidance:
      "Prinsip privasi dan keselamatan data menekankan perlindungan data peribadi, data rasmi, data sensitif dan maklumat terperingkat.",
    options: [
      { label: "Ya, kategori data sensitif dan terhad telah dikenal pasti", risk: 0 },
      { label: "Sebahagian pengguna tahu, tetapi belum menyeluruh", risk: 1 },
      { label: "Belum ada panduan yang jelas", risk: 3 },
      { label: "Tidak pasti", risk: 2 }
    ]
  },
  {
    id: "inclusiveness",
    principle: "Keterangkuman",
    question: "Adakah penggunaan AI ini mengambil kira keperluan pelbagai kumpulan pengguna?",
    guidance:
      "Prinsip keterangkuman memastikan penggunaan AI tidak mengecualikan kumpulan tertentu dan boleh dimanfaatkan oleh pengguna yang berbeza tahap kemahiran.",
    options: [
      { label: "Ya, keperluan pengguna teknikal dan bukan teknikal diambil kira", risk: 0 },
      { label: "Sebahagiannya, tetapi masih boleh ditambah baik", risk: 1 },
      { label: "Tidak, penggunaan lebih tertumpu kepada kumpulan tertentu sahaja", risk: 2 },
      { label: "Tidak pasti", risk: 2 }
    ]
  },
  {
    id: "transparency",
    principle: "Ketelusan",
    question: "Adakah pengguna akan memaklumkan atau merekod penggunaan AI bagi tugasan rasmi tertentu?",
    guidance:
      "Prinsip ketelusan menekankan bahawa penggunaan AI perlu jelas, boleh diterangkan dan tidak mengelirukan pihak yang menerima output.",
    options: [
      { label: "Ya, penggunaan AI akan dimaklumkan atau direkod jika berkaitan tugasan rasmi", risk: 0 },
      { label: "Hanya jika diminta", risk: 1 },
      { label: "Tidak, penggunaan AI tidak direkod atau dimaklumkan", risk: 2 },
      { label: "Tidak pasti", risk: 2 }
    ]
  },
  {
    id: "accountability",
    principle: "Akauntabiliti",
    question: "Siapakah yang bertanggungjawab terhadap output akhir yang dibantu oleh AI?",
    guidance:
      "Prinsip akauntabiliti menekankan bahawa manusia atau organisasi masih perlu bertanggungjawab terhadap penggunaan dan kesan output AI.",
    options: [
      { label: "Pegawai atau pemilik tugasan tetap bertanggungjawab sepenuhnya", risk: 0 },
      { label: "Tanggungjawab dikongsi, tetapi belum dinyatakan secara jelas", risk: 1 },
      { label: "Tidak jelas siapa bertanggungjawab jika berlaku kesilapan", risk: 3 },
      { label: "Tidak pasti", risk: 2 }
    ]
  },
  {
    id: "human_social_wellbeing",
    principle: "Kesejahteraan Manusia dan Sosial",
    question: "Adakah manfaat dan kesan negatif penggunaan AI telah dipertimbangkan sebelum digunakan secara meluas?",
    guidance:
      "Prinsip kesejahteraan manusia dan sosial menekankan bahawa AI perlu memberi manfaat, mengurangkan risiko dan tidak memberi kesan negatif kepada pengguna atau masyarakat.",
    options: [
      { label: "Ya, manfaat dan risiko telah dikenal pasti", risk: 0 },
      { label: "Sebahagiannya, tetapi belum lengkap", risk: 1 },
      { label: "Belum dibuat penilaian manfaat dan risiko", risk: 3 },
      { label: "Tidak pasti", risk: 2 }
    ]
  }
];
