export const questions = [
  {
    id: 1,
    text: {
      ms: "Apakah tujuan utama anda menggunakan AI?",
      en: "What is your main purpose for using AI?"
    },
    options: [
      {
        label: {
          ms: "Kerja umum seperti menulis, meringkaskan dan mencari idea",
          en: "General work such as writing, summarizing and generating ideas"
        },
        scores: { chatgpt_codex: 3, claude_claude_code: 2, gemini_workspace: 1 }
      },
      {
        label: {
          ms: "Membina aplikasi, debug kod dan kerja GitHub",
          en: "Building applications, debugging code and GitHub work"
        },
        scores: { chatgpt_codex: 4, claude_claude_code: 3, gemini_workspace: 1 }
      },
      {
        label: {
          ms: "Kerja dalam Gmail, Docs, Sheets, Slides dan Drive",
          en: "Work in Gmail, Docs, Sheets, Slides and Drive"
        },
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      },
      {
        label: {
          ms: "Analisis dokumen panjang dan penulisan strategik",
          en: "Long document analysis and strategic writing"
        },
        scores: { claude_claude_code: 4, chatgpt_codex: 2, gemini_workspace: 1 }
      }
    ]
  },
  {
    id: 2,
    text: {
      ms: "Platform kerja utama anda sekarang?",
      en: "What is your main work platform today?"
    },
    options: [
      { label: { ms: "Google Workspace", en: "Google Workspace" }, scores: { gemini_workspace: 5 } },
      {
        label: {
          ms: "Microsoft 365 atau campuran pelbagai platform",
          en: "Microsoft 365 or a mix of multiple platforms"
        },
        scores: { chatgpt_codex: 2, claude_claude_code: 2 }
      },
      {
        label: {
          ms: "GitHub, VS Code, terminal atau persekitaran pembangunan aplikasi",
          en: "GitHub, VS Code, terminal or application development environment"
        },
        scores: { chatgpt_codex: 4, claude_claude_code: 4, gemini_workspace: 1 }
      },
      {
        label: {
          ms: "Belum pasti atau masih menilai platform",
          en: "Not sure yet or still evaluating platforms"
        },
        scores: { chatgpt_codex: 2, claude_claude_code: 2, gemini_workspace: 2 }
      }
    ]
  },
  {
    id: 3,
    text: {
      ms: "Adakah anda mahu AI membantu kerja coding?",
      en: "Do you want AI to help with coding work?"
    },
    options: [
      {
        label: {
          ms: "Ya, saya mahu AI membantu siapkan feature dan delivery projek",
          en: "Yes, I want AI to help complete features and project delivery"
        },
        scores: { chatgpt_codex: 5, claude_claude_code: 2, gemini_workspace: 1 }
      },
      {
        label: {
          ms: "Ya, saya mahu AI bantu faham, review dan debug kod secara berhati-hati",
          en: "Yes, I want AI to help understand, review and debug code carefully"
        },
        scores: { claude_claude_code: 5, chatgpt_codex: 3 }
      },
      {
        label: {
          ms: "Ya, tetapi hanya untuk bantuan asas atau contoh kod",
          en: "Yes, but only for basic help or code examples"
        },
        scores: { chatgpt_codex: 2, claude_claude_code: 2, gemini_workspace: 2 }
      },
      {
        label: {
          ms: "Tidak, saya lebih fokus kepada kerja pejabat dan dokumen",
          en: "No, I am more focused on office work and documents"
        },
        scores: { gemini_workspace: 3, chatgpt_codex: 2, claude_claude_code: 2 }
      }
    ]
  },
  {
    id: 4,
    text: {
      ms: "Apakah jenis dokumen yang paling banyak anda hasilkan?",
      en: "What type of documents do you create most often?"
    },
    options: [
      {
        label: {
          ms: "Minit mesyuarat, e-mel dan laporan ringkas",
          en: "Meeting minutes, emails and short reports"
        },
        scores: { chatgpt_codex: 3, gemini_workspace: 3, claude_claude_code: 1 }
      },
      {
        label: {
          ms: "Kertas cadangan, tender, spesifikasi dan laporan strategik",
          en: "Proposals, tenders, specifications and strategic reports"
        },
        scores: { claude_claude_code: 4, chatgpt_codex: 3, gemini_workspace: 1 }
      },
      {
        label: {
          ms: "Spreadsheet, slide dan dokumen dalam Google Workspace",
          en: "Spreadsheets, slides and documents in Google Workspace"
        },
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      },
      {
        label: {
          ms: "Dokumentasi teknikal sistem atau penerangan architecture",
          en: "Technical system documentation or architecture explanation"
        },
        scores: { claude_claude_code: 4, chatgpt_codex: 3, gemini_workspace: 1 }
      }
    ]
  },
  {
    id: 5,
    text: {
      ms: "Siapa pengguna utama AI ini?",
      en: "Who are the main users of this AI?"
    },
    options: [
      {
        label: { ms: "Pegawai umum bukan teknikal", en: "General non-technical officers" },
        scores: { gemini_workspace: 3, chatgpt_codex: 3, claude_claude_code: 1 }
      },
      {
        label: {
          ms: "Pegawai latihan, penyelaras program atau pembangun kandungan",
          en: "Training officers, program coordinators or content developers"
        },
        scores: { chatgpt_codex: 3, claude_claude_code: 3, gemini_workspace: 2 }
      },
      {
        label: {
          ms: "Developer, pegawai ICT atau pasukan teknikal",
          en: "Developers, ICT officers or technical teams"
        },
        scores: { chatgpt_codex: 4, claude_claude_code: 4, gemini_workspace: 2 }
      },
      {
        label: { ms: "Seluruh organisasi", en: "The whole organization" },
        scores: { gemini_workspace: 4, chatgpt_codex: 3, claude_claude_code: 2 }
      }
    ]
  },
  {
    id: 6,
    text: {
      ms: "Gaya bantuan AI yang anda mahu?",
      en: "What style of AI assistance do you want?"
    },
    options: [
      {
        label: {
          ms: "AI sebagai pembantu serba guna untuk pelbagai tugasan",
          en: "AI as a general-purpose assistant for many tasks"
        },
        scores: { chatgpt_codex: 4, claude_claude_code: 2, gemini_workspace: 2 }
      },
      {
        label: {
          ms: "AI sebagai rakan berfikir yang menerangkan dengan mendalam",
          en: "AI as a thinking partner that explains in depth"
        },
        scores: { claude_claude_code: 5, chatgpt_codex: 2 }
      },
      {
        label: {
          ms: "AI sebagai agen yang membantu melaksanakan tugasan coding",
          en: "AI as an agent that helps carry out coding tasks"
        },
        scores: { chatgpt_codex: 5, claude_claude_code: 3, gemini_workspace: 1 }
      },
      {
        label: {
          ms: "AI yang terus berada dalam aliran kerja Google",
          en: "AI that works directly inside Google workflows"
        },
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      }
    ]
  },
  {
    id: 7,
    text: {
      ms: "Adakah organisasi anda menggunakan Google Workspace secara aktif?",
      en: "Does your organization actively use Google Workspace?"
    },
    options: [
      {
        label: {
          ms: "Ya, hampir semua kerja rasmi dalam Google Workspace",
          en: "Yes, almost all official work is in Google Workspace"
        },
        scores: { gemini_workspace: 5 }
      },
      {
        label: { ms: "Ya, tetapi tidak sepenuhnya", en: "Yes, but not fully" },
        scores: { gemini_workspace: 3, chatgpt_codex: 2, claude_claude_code: 1 }
      },
      {
        label: { ms: "Tidak, organisasi menggunakan platform lain", en: "No, the organization uses another platform" },
        scores: { chatgpt_codex: 2, claude_claude_code: 2 }
      },
      {
        label: { ms: "Tidak pasti", en: "Not sure" },
        scores: { chatgpt_codex: 1, claude_claude_code: 1, gemini_workspace: 1 }
      }
    ]
  },
  {
    id: 8,
    text: {
      ms: "Apakah keutamaan anda dalam menggunakan AI?",
      en: "What is your priority when using AI?"
    },
    options: [
      {
        label: {
          ms: "Satu AI yang seimbang untuk banyak kegunaan",
          en: "One balanced AI for many uses"
        },
        scores: { chatgpt_codex: 5, claude_claude_code: 2, gemini_workspace: 2 }
      },
      {
        label: {
          ms: "AI yang kuat untuk reasoning dan dokumen panjang",
          en: "AI suited to reasoning and long documents"
        },
        scores: { claude_claude_code: 5, chatgpt_codex: 2 }
      },
      {
        label: {
          ms: "AI yang kuat untuk coding agent dan software delivery",
          en: "AI suited to coding agents and software delivery"
        },
        scores: { chatgpt_codex: 5, claude_claude_code: 3, gemini_workspace: 1 }
      },
      {
        label: {
          ms: "AI yang paling sesuai dengan Google Workspace",
          en: "AI that fits Google Workspace use"
        },
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      }
    ]
  },
  {
    id: 9,
    text: {
      ms: "Apakah tahap teknikal pengguna utama?",
      en: "What is the technical level of the main users?"
    },
    options: [
      {
        label: {
          ms: "Rendah, pengguna tidak biasa coding atau terminal",
          en: "Low, users are not familiar with coding or terminal use"
        },
        scores: { gemini_workspace: 3, chatgpt_codex: 3, claude_claude_code: 1 }
      },
      {
        label: {
          ms: "Sederhana, boleh guna AI dan faham konsep digital asas",
          en: "Moderate, users can use AI and understand basic digital concepts"
        },
        scores: { chatgpt_codex: 3, gemini_workspace: 3, claude_claude_code: 2 }
      },
      {
        label: {
          ms: "Tinggi, biasa dengan coding, GitHub, terminal atau deployment",
          en: "High, users are familiar with coding, GitHub, terminal or deployment"
        },
        scores: { chatgpt_codex: 4, claude_claude_code: 4, gemini_workspace: 2 }
      },
      {
        label: {
          ms: "Campuran pengguna teknikal dan bukan teknikal",
          en: "A mix of technical and non-technical users"
        },
        scores: { chatgpt_codex: 3, gemini_workspace: 3, claude_claude_code: 2 }
      }
    ]
  },
  {
    id: 10,
    text: {
      ms: "Apakah pendekatan yang sesuai sebelum organisasi membuat langganan besar?",
      en: "What is a suitable approach before the organization makes a large subscription decision?"
    },
    options: [
      {
        label: {
          ms: "Pilot kecil untuk kerja umum dan coding",
          en: "A small pilot for general work and coding"
        },
        scores: { chatgpt_codex: 4, claude_claude_code: 3, gemini_workspace: 2 }
      },
      {
        label: {
          ms: "Pilot untuk dokumen panjang, analisis dan technical reasoning",
          en: "A pilot for long documents, analysis and technical reasoning"
        },
        scores: { claude_claude_code: 5, chatgpt_codex: 2 }
      },
      {
        label: {
          ms: "Pilot dalam Google Workspace untuk e-mel, dokumen, mesyuarat dan spreadsheet",
          en: "A Google Workspace pilot for email, documents, meetings and spreadsheets"
        },
        scores: { gemini_workspace: 5, chatgpt_codex: 1 }
      },
      {
        label: {
          ms: "Bandingkan semua platform berdasarkan use case sebenar",
          en: "Compare all platforms using real use cases"
        },
        scores: { chatgpt_codex: 3, claude_claude_code: 3, gemini_workspace: 3 }
      }
    ]
  }
];
