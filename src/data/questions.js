export const questions = [
  {
    id: 1,
    text: "Apakah tujuan utama anda menggunakan AI?",
    options: [
      {
        label: "Kerja umum seperti menulis, meringkaskan dan mencari idea",
        scores: { chatgpt_codex: 3, claude_claude_code: 2, gemini_workspace: 1 }
      },
      {
        label: "Membina aplikasi, debug kod dan kerja GitHub",
        scores: { chatgpt_codex: 4, claude_claude_code: 3, gemini_workspace: 1 }
      },
      {
        label: "Kerja dalam Gmail, Docs, Sheets, Slides dan Drive",
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      },
      {
        label: "Analisis dokumen panjang dan penulisan strategik",
        scores: { claude_claude_code: 4, chatgpt_codex: 2, gemini_workspace: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "Platform kerja utama anda sekarang?",
    options: [
      { label: "Google Workspace", scores: { gemini_workspace: 5 } },
      {
        label: "Microsoft 365 atau campuran pelbagai platform",
        scores: { chatgpt_codex: 2, claude_claude_code: 2 }
      },
      {
        label: "GitHub, VS Code, terminal atau persekitaran pembangunan aplikasi",
        scores: { chatgpt_codex: 4, claude_claude_code: 4, gemini_workspace: 1 }
      },
      {
        label: "Belum pasti atau masih menilai platform",
        scores: { chatgpt_codex: 2, claude_claude_code: 2, gemini_workspace: 2 }
      }
    ]
  },
  {
    id: 3,
    text: "Adakah anda mahu AI membantu kerja coding?",
    options: [
      {
        label: "Ya, saya mahu AI membantu siapkan feature dan delivery projek",
        scores: { chatgpt_codex: 5, claude_claude_code: 2, gemini_workspace: 1 }
      },
      {
        label: "Ya, saya mahu AI bantu faham, review dan debug kod secara berhati-hati",
        scores: { claude_claude_code: 5, chatgpt_codex: 3 }
      },
      {
        label: "Ya, tetapi hanya untuk bantuan asas atau contoh kod",
        scores: { chatgpt_codex: 2, claude_claude_code: 2, gemini_workspace: 2 }
      },
      {
        label: "Tidak, saya lebih fokus kepada kerja pejabat dan dokumen",
        scores: { gemini_workspace: 3, chatgpt_codex: 2, claude_claude_code: 2 }
      }
    ]
  },
  {
    id: 4,
    text: "Apakah jenis dokumen yang paling banyak anda hasilkan?",
    options: [
      {
        label: "Minit mesyuarat, e-mel dan laporan ringkas",
        scores: { chatgpt_codex: 3, gemini_workspace: 3, claude_claude_code: 1 }
      },
      {
        label: "Kertas cadangan, tender, spesifikasi dan laporan strategik",
        scores: { claude_claude_code: 4, chatgpt_codex: 3, gemini_workspace: 1 }
      },
      {
        label: "Spreadsheet, slide dan dokumen dalam Google Workspace",
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      },
      {
        label: "Dokumentasi teknikal sistem atau penerangan architecture",
        scores: { claude_claude_code: 4, chatgpt_codex: 3, gemini_workspace: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "Siapa pengguna utama AI ini?",
    options: [
      {
        label: "Pegawai umum bukan teknikal",
        scores: { gemini_workspace: 3, chatgpt_codex: 3, claude_claude_code: 1 }
      },
      {
        label: "Pegawai latihan, penyelaras program atau pembangun kandungan",
        scores: { chatgpt_codex: 3, claude_claude_code: 3, gemini_workspace: 2 }
      },
      {
        label: "Developer, pegawai ICT atau pasukan teknikal",
        scores: { chatgpt_codex: 4, claude_claude_code: 4, gemini_workspace: 2 }
      },
      {
        label: "Seluruh organisasi",
        scores: { gemini_workspace: 4, chatgpt_codex: 3, claude_claude_code: 2 }
      }
    ]
  },
  {
    id: 6,
    text: "Gaya bantuan AI yang anda mahu?",
    options: [
      {
        label: "AI sebagai pembantu serba guna untuk pelbagai tugasan",
        scores: { chatgpt_codex: 4, claude_claude_code: 2, gemini_workspace: 2 }
      },
      {
        label: "AI sebagai rakan berfikir yang menerangkan dengan mendalam",
        scores: { claude_claude_code: 5, chatgpt_codex: 2 }
      },
      {
        label: "AI sebagai agen yang membantu melaksanakan tugasan coding",
        scores: { chatgpt_codex: 5, claude_claude_code: 3, gemini_workspace: 1 }
      },
      {
        label: "AI yang terus berada dalam aliran kerja Google",
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "Adakah organisasi anda menggunakan Google Workspace secara aktif?",
    options: [
      { label: "Ya, hampir semua kerja rasmi dalam Google Workspace", scores: { gemini_workspace: 5 } },
      {
        label: "Ya, tetapi tidak sepenuhnya",
        scores: { gemini_workspace: 3, chatgpt_codex: 2, claude_claude_code: 1 }
      },
      {
        label: "Tidak, organisasi menggunakan platform lain",
        scores: { chatgpt_codex: 2, claude_claude_code: 2 }
      },
      {
        label: "Tidak pasti",
        scores: { chatgpt_codex: 1, claude_claude_code: 1, gemini_workspace: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "Apakah keutamaan anda dalam menggunakan AI?",
    options: [
      {
        label: "Satu AI yang seimbang untuk banyak kegunaan",
        scores: { chatgpt_codex: 5, claude_claude_code: 2, gemini_workspace: 2 }
      },
      {
        label: "AI yang kuat untuk reasoning dan dokumen panjang",
        scores: { claude_claude_code: 5, chatgpt_codex: 2 }
      },
      {
        label: "AI yang kuat untuk coding agent dan software delivery",
        scores: { chatgpt_codex: 5, claude_claude_code: 3, gemini_workspace: 1 }
      },
      {
        label: "AI yang paling sesuai dengan Google Workspace",
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "Apakah tahap teknikal pengguna utama?",
    options: [
      {
        label: "Rendah, pengguna tidak biasa coding atau terminal",
        scores: { gemini_workspace: 3, chatgpt_codex: 3, claude_claude_code: 1 }
      },
      {
        label: "Sederhana, boleh guna AI dan faham konsep digital asas",
        scores: { chatgpt_codex: 3, gemini_workspace: 3, claude_claude_code: 2 }
      },
      {
        label: "Tinggi, biasa dengan coding, GitHub, terminal atau deployment",
        scores: { chatgpt_codex: 4, claude_claude_code: 4, gemini_workspace: 2 }
      },
      {
        label: "Campuran pengguna teknikal dan bukan teknikal",
        scores: { chatgpt_codex: 3, gemini_workspace: 3, claude_claude_code: 2 }
      }
    ]
  },
  {
    id: 10,
    text: "Apakah pendekatan terbaik sebelum organisasi membuat langganan besar?",
    options: [
      {
        label: "Pilot kecil untuk kerja umum dan coding",
        scores: { chatgpt_codex: 4, claude_claude_code: 3, gemini_workspace: 2 }
      },
      {
        label: "Pilot untuk dokumen panjang, analisis dan technical reasoning",
        scores: { claude_claude_code: 5, chatgpt_codex: 2 }
      },
      {
        label: "Pilot dalam Google Workspace untuk e-mel, dokumen, mesyuarat dan spreadsheet",
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      },
      {
        label: "Bandingkan semua platform berdasarkan use case sebenar",
        scores: { chatgpt_codex: 3, claude_claude_code: 3, gemini_workspace: 3 }
      }
    ]
  }
];
