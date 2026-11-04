export const questions = [
  {
    id: 1,
    text: { ms: "Apakah tujuan utama anda menggunakan AI?" },
    options: [
      {
        label: { ms: "Kerja umum seperti menulis, meringkaskan dan mencari idea" },
        scores: { chatgpt_codex: 5, claude_claude_code: 2, microsoft_copilot: 2, gemini_workspace: 2, kimi: 1 }
      },
      {
        label: { ms: "Membina aplikasi, debug kod dan kerja GitHub" },
        scores: { github_copilot: 5, chatgpt_codex: 2, claude_claude_code: 2, deepseek: 3, kimi: 1 }
      },
      {
        label: { ms: "Kerja dalam Gmail, Docs, Sheets, Slides dan Drive" },
        scores: { gemini_workspace: 5 }
      },
      {
        label: { ms: "Kerja dalam Outlook, Word, Excel, PowerPoint dan Teams" },
        scores: { microsoft_copilot: 5 }
      },
      {
        label: { ms: "Analisis dokumen panjang dan penulisan strategik" },
        scores: { claude_claude_code: 5, kimi: 3, chatgpt_codex: 2, perplexity: 1 }
      },
      {
        label: { ms: "Analisis banyak fail, konteks sangat panjang dan deep research" },
        scores: { kimi: 7, claude_claude_code: 2, perplexity: 2 }
      },
      {
        label: { ms: "Research pantas, semakan sumber dan perbandingan maklumat" },
        scores: { perplexity: 6, chatgpt_codex: 1, kimi: 2 }
      }
    ]
  },
  {
    id: 2,
    text: { ms: "Platform kerja utama anda sekarang?" },
    options: [
      { label: { ms: "Google Workspace" }, scores: { gemini_workspace: 5 } },
      { label: { ms: "Microsoft 365" }, scores: { microsoft_copilot: 5 } },
      {
        label: { ms: "Campuran pelbagai platform" },
        scores: { chatgpt_codex: 2, claude_claude_code: 2, kimi: 2, perplexity: 2 }
      },
      {
        label: { ms: "GitHub, VS Code, terminal atau persekitaran pembangunan aplikasi" },
        scores: { github_copilot: 5, claude_claude_code: 2, chatgpt_codex: 2, deepseek: 2 }
      },
      {
        label: { ms: "Infrastruktur sendiri atau sistem dalaman organisasi" },
        scores: { open_source_llm: 6, deepseek: 1 }
      }
    ]
  },
  {
    id: 3,
    text: { ms: "Adakah anda mahu AI membantu kerja coding?" },
    options: [
      {
        label: { ms: "Ya, saya mahu AI membantu siapkan feature dan delivery projek" },
        scores: { chatgpt_codex: 5, github_copilot: 4, claude_claude_code: 3, kimi: 2 }
      },
      {
        label: { ms: "Ya, saya mahu AI bantu faham, review dan debug kod secara berhati-hati" },
        scores: { claude_claude_code: 5, deepseek: 4, chatgpt_codex: 2 }
      },
      {
        label: { ms: "Ya, saya mahu bantuan code completion terus dalam IDE" },
        scores: { github_copilot: 6, deepseek: 1 }
      },
      {
        label: { ms: "Ya, tetapi hanya untuk bantuan asas atau contoh kod" },
        scores: { deepseek: 4, chatgpt_codex: 2, kimi: 2 }
      },
      {
        label: { ms: "Tidak, saya lebih fokus kepada kerja pejabat dan dokumen" },
        scores: { microsoft_copilot: 3, gemini_workspace: 3, perplexity: 1 }
      }
    ]
  },
  {
    id: 4,
    text: { ms: "Apakah jenis dokumen atau kandungan yang paling banyak anda hasilkan?" },
    options: [
      {
        label: { ms: "Minit mesyuarat, e-mel dan laporan ringkas" },
        scores: { microsoft_copilot: 3, gemini_workspace: 3, chatgpt_codex: 2 }
      },
      {
        label: { ms: "Kertas cadangan, tender, spesifikasi dan laporan strategik" },
        scores: { claude_claude_code: 5, kimi: 4, chatgpt_codex: 2, perplexity: 2 }
      },
      {
        label: { ms: "Spreadsheet, slide dan dokumen dalam Google Workspace" },
        scores: { gemini_workspace: 5 }
      },
      {
        label: { ms: "Word, Excel, PowerPoint, Outlook atau Teams" },
        scores: { microsoft_copilot: 5 }
      },
      {
        label: { ms: "Dokumentasi teknikal sistem atau penerangan architecture" },
        scores: { claude_claude_code: 5, chatgpt_codex: 2, deepseek: 2, github_copilot: 1 }
      }
    ]
  },
  {
    id: 5,
    text: { ms: "Siapa pengguna utama AI ini?" },
    options: [
      {
        label: { ms: "Pegawai umum bukan teknikal" },
        scores: { microsoft_copilot: 3, gemini_workspace: 3, chatgpt_codex: 2 }
      },
      {
        label: { ms: "Pegawai latihan, penyelaras program atau pembangun kandungan" },
        scores: { chatgpt_codex: 2, claude_claude_code: 2, perplexity: 3, kimi: 2 }
      },
      {
        label: { ms: "Developer, pegawai ICT atau pasukan teknikal" },
        scores: { github_copilot: 4, claude_claude_code: 2, chatgpt_codex: 2, deepseek: 3 }
      },
      {
        label: { ms: "Seluruh organisasi" },
        scores: { microsoft_copilot: 4, gemini_workspace: 4, chatgpt_codex: 2 }
      },
      {
        label: { ms: "Pasukan data, AI atau infrastruktur dalaman" },
        scores: { open_source_llm: 6, deepseek: 1 }
      }
    ]
  },
  {
    id: 6,
    text: { ms: "Gaya bantuan AI yang anda mahu?" },
    options: [
      {
        label: { ms: "AI sebagai pembantu serba guna untuk pelbagai tugasan" },
        scores: { chatgpt_codex: 5, microsoft_copilot: 2, gemini_workspace: 2 }
      },
      {
        label: { ms: "AI sebagai rakan berfikir yang menerangkan dengan mendalam" },
        scores: { claude_claude_code: 5, deepseek: 4, kimi: 3 }
      },
      {
        label: { ms: "AI sebagai agen yang membantu melaksanakan tugasan coding" },
        scores: { chatgpt_codex: 4, claude_claude_code: 4, github_copilot: 4, kimi: 2 }
      },
      {
        label: { ms: "AI yang terus berada dalam aliran kerja Google" },
        scores: { gemini_workspace: 5 }
      },
      {
        label: { ms: "AI yang terus berada dalam aliran kerja Microsoft" },
        scores: { microsoft_copilot: 5 }
      },
      {
        label: { ms: "AI yang membantu mencari sumber dan membandingkan maklumat" },
        scores: { perplexity: 6, kimi: 2 }
      }
    ]
  },
  {
    id: 7,
    text: { ms: "Adakah organisasi anda menggunakan ekosistem tertentu secara aktif?" },
    options: [
      { label: { ms: "Ya, hampir semua kerja rasmi dalam Google Workspace" }, scores: { gemini_workspace: 5 } },
      { label: { ms: "Ya, hampir semua kerja rasmi dalam Microsoft 365" }, scores: { microsoft_copilot: 5 } },
      {
        label: { ms: "Ya, tetapi campuran Google, Microsoft dan aplikasi lain" },
        scores: { chatgpt_codex: 2, claude_claude_code: 2, kimi: 2, perplexity: 2 }
      },
      {
        label: { ms: "Tidak, organisasi banyak menggunakan sistem dalaman sendiri" },
        scores: { open_source_llm: 6, deepseek: 2 }
      },
      {
        label: { ms: "Tidak pasti" },
        scores: {}
      }
    ]
  },
  {
    id: 8,
    text: { ms: "Apakah keutamaan anda dalam menggunakan AI?" },
    options: [
      {
        label: { ms: "Satu AI yang seimbang untuk banyak kegunaan" },
        scores: { chatgpt_codex: 5, microsoft_copilot: 1, gemini_workspace: 1 }
      },
      {
        label: { ms: "AI yang sesuai untuk reasoning dan dokumen panjang" },
        scores: { claude_claude_code: 5, kimi: 4, deepseek: 4 }
      },
      {
        label: { ms: "AI yang sesuai untuk coding agent dan software delivery" },
        scores: { chatgpt_codex: 4, github_copilot: 4, claude_claude_code: 4, deepseek: 2, kimi: 2 }
      },
      {
        label: { ms: "AI yang sesuai dengan Google Workspace" },
        scores: { gemini_workspace: 5 }
      },
      {
        label: { ms: "AI yang sesuai dengan Microsoft 365" },
        scores: { microsoft_copilot: 5 }
      },
      {
        label: { ms: "AI yang membantu research dengan sumber rujukan" },
        scores: { perplexity: 6, kimi: 2 }
      }
    ]
  },
  {
    id: 9,
    text: { ms: "Apakah tahap teknikal pengguna utama?" },
    options: [
      {
        label: { ms: "Rendah, pengguna tidak biasa coding atau terminal" },
        scores: { microsoft_copilot: 3, gemini_workspace: 3, chatgpt_codex: 2, perplexity: 1 }
      },
      {
        label: { ms: "Sederhana, boleh guna AI dan faham konsep digital asas" },
        scores: { chatgpt_codex: 3, gemini_workspace: 2, microsoft_copilot: 2, claude_claude_code: 2, perplexity: 2, kimi: 2 }
      },
      {
        label: { ms: "Tinggi, biasa dengan coding, GitHub, terminal atau deployment" },
        scores: { github_copilot: 4, claude_claude_code: 3, chatgpt_codex: 2, deepseek: 3, kimi: 1 }
      },
      {
        label: { ms: "Sangat teknikal, mampu mengurus model, server atau deployment sendiri" },
        scores: { open_source_llm: 6, deepseek: 3 }
      },
      {
        label: { ms: "Campuran pengguna teknikal dan bukan teknikal" },
        scores: { chatgpt_codex: 2, gemini_workspace: 3, microsoft_copilot: 3, claude_claude_code: 1 }
      }
    ]
  },
  {
    id: 10,
    text: { ms: "Apakah pendekatan yang sesuai sebelum organisasi membuat langganan besar?" },
    options: [
      {
        label: { ms: "Pilot kecil untuk kerja umum dan coding" },
        scores: { chatgpt_codex: 4, github_copilot: 3, claude_claude_code: 3, deepseek: 3, kimi: 1 }
      },
      {
        label: { ms: "Pilot untuk dokumen panjang, analisis dan technical reasoning" },
        scores: { claude_claude_code: 5, kimi: 4, deepseek: 2 }
      },
      {
        label: { ms: "Pilot dalam Google Workspace untuk e-mel, dokumen, mesyuarat dan spreadsheet" },
        scores: { gemini_workspace: 5 }
      },
      {
        label: { ms: "Pilot dalam Microsoft 365 untuk dokumen, e-mel, mesyuarat dan spreadsheet" },
        scores: { microsoft_copilot: 5 }
      },
      {
        label: { ms: "Bandingkan semua platform berdasarkan use case sebenar" },
        scores: {
          chatgpt_codex: 3,
          claude_claude_code: 3,
          gemini_workspace: 3,
          microsoft_copilot: 3,
          kimi: 3,
          deepseek: 3,
          perplexity: 3,
          github_copilot: 3,
          open_source_llm: 3
        }
      }
    ]
  },
  {
    id: 11,
    text: { ms: "Apakah keperluan research dan maklumat semasa anda?" },
    options: [
      {
        label: { ms: "Saya kerap perlu mencari sumber, pautan dan maklumat semasa" },
        scores: { perplexity: 6, chatgpt_codex: 2, kimi: 1 }
      },
      {
        label: { ms: "Saya perlu bandingkan polisi, produk, teknologi atau pilihan vendor" },
        scores: { perplexity: 4, claude_claude_code: 2, kimi: 3, chatgpt_codex: 1 }
      },
      {
        label: { ms: "Saya lebih banyak bekerja dengan dokumen dalaman berbanding carian web" },
        scores: { kimi: 4, claude_claude_code: 2, microsoft_copilot: 2, gemini_workspace: 2 }
      },
      {
        label: { ms: "Research bukan keutamaan utama" },
        scores: { chatgpt_codex: 1, gemini_workspace: 1, microsoft_copilot: 1 }
      }
    ]
  },
  {
    id: 12,
    text: { ms: "Apakah pertimbangan tambahan yang paling penting?" },
    options: [
      {
        label: { ms: "Kos dan pilihan model alternatif perlu dibandingkan" },
        scores: { deepseek: 6, open_source_llm: 3, kimi: 3 }
      },
      {
        label: { ms: "Kawalan data, self-hosting atau integrasi dalaman sangat penting" },
        scores: { open_source_llm: 7, deepseek: 2 }
      },
      {
        label: { ms: "Keutamaan saya ialah pengalaman developer dalam IDE" },
        scores: { github_copilot: 6, chatgpt_codex: 2 }
      },
      {
        label: { ms: "Keutamaan saya ialah penggunaan organisasi yang mudah dilatih" },
        scores: { microsoft_copilot: 3, gemini_workspace: 3, chatgpt_codex: 2 }
      },
      {
        label: { ms: "Saya belum pasti dan mahu keputusan berdasarkan use case sebenar" },
        scores: {
          chatgpt_codex: 2,
          claude_claude_code: 2,
          gemini_workspace: 2,
          microsoft_copilot: 2,
          kimi: 2,
          deepseek: 2,
          perplexity: 2,
          github_copilot: 2,
          open_source_llm: 2
        }
      }
    ]
  }
];
