export const platforms = {
  ms: {
    chatgpt_codex: {
      name: "ChatGPT + Codex",
      scoreLabel: "ChatGPT + Codex",
      shortDescription:
        "ChatGPT + Codex sesuai jika pengguna mahukan satu ekosistem AI yang seimbang untuk kerja umum dan pembangunan sistem. Ia boleh membantu daripada idea, penulisan, analisis dan prompt sehingga kerja coding seperti debugging, refactoring dan pembinaan feature.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda menunjukkan gabungan kerja umum, penulisan, analisis, prompt dan pembangunan sistem. Ia sesuai untuk pengguna yang mahu satu ekosistem AI yang boleh membantu daripada idea sehingga pelaksanaan kod.",
      suitableFor: [
        "Pengguna yang mahu AI serba guna",
        "Developer atau pegawai ICT",
        "Pasukan yang membina aplikasi",
        "Pengguna yang mahu gabungan kerja dokumen dan coding"
      ],
      considerations: [
        "Perlu garis panduan penggunaan data",
        "Output AI perlu disemak manusia",
        "Kod yang dijana perlu diuji",
        "Jangan masukkan data sulit tanpa kebenaran organisasi"
      ],
      nextStep:
        "Jalankan pilot kecil menggunakan beberapa use case seperti penyediaan dokumen, debugging, refactoring dan pembinaan feature ringkas."
    },
    claude_claude_code: {
      name: "Claude.ai + Claude Code",
      scoreLabel: "Claude.ai + Claude Code",
      shortDescription:
        "Claude.ai + Claude Code sesuai jika pengguna mengutamakan reasoning, penerangan mendalam, analisis dokumen panjang, dokumentasi teknikal dan coding secara berhati-hati. Ia sesuai untuk pengguna yang mahu AI bertindak seperti rakan berfikir atau mentor teknikal.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda menekankan reasoning, penerangan mendalam, analisis dokumen panjang, dokumentasi teknikal dan coding secara berhati-hati. Ia sesuai jika pengguna mahu AI bertindak seperti rakan berfikir atau mentor teknikal.",
      suitableFor: [
        "Pengguna yang banyak membuat analisis dan penulisan strategik",
        "Developer yang mahu memahami kod dengan mendalam",
        "Pasukan yang mementingkan review, explanation dan documentation",
        "Pengguna yang mahu coding secara terkawal melalui terminal"
      ],
      considerations: [
        "Perlu kawalan terhadap permission terminal",
        "Perubahan kod perlu disemak",
        "Had penggunaan subscription perlu difahami",
        "Data sensitif perlu dikawal mengikut polisi organisasi"
      ],
      nextStep:
        "Jalankan pilot untuk use case seperti analisis dokumen panjang, review kod, debugging berpandu dan penyediaan dokumentasi teknikal."
    },
    gemini_workspace: {
      name: "Gemini / Gemini for Google Workspace",
      scoreLabel: "Gemini / Google Workspace",
      shortDescription:
        "Gemini / Gemini for Google Workspace sesuai jika organisasi banyak menggunakan Google Workspace seperti Gmail, Docs, Sheets, Slides, Drive dan Meet. Ia sesuai untuk penggunaan organisasi yang mahu AI berada terus dalam aliran kerja harian pegawai.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda banyak berkait dengan Google Workspace seperti Gmail, Docs, Sheets, Slides, Drive dan Meet. Ia sesuai jika organisasi mahu AI berada terus dalam aliran kerja harian pegawai.",
      suitableFor: [
        "Organisasi yang menggunakan Google Workspace secara aktif",
        "Pegawai bukan teknikal",
        "Pengguna yang banyak bekerja dengan e-mel, dokumen, spreadsheet, slide dan mesyuarat",
        "Pasukan yang mahu AI tersedia dalam aliran kerja sedia ada"
      ],
      considerations: [
        "Semak tetapan admin dan access control",
        "Pastikan polisi data organisasi jelas",
        "Nilai kesesuaian pelan Workspace",
        "Untuk coding, semak juga kesesuaian Gemini Code Assist atau Gemini CLI"
      ],
      nextStep:
        "Jalankan pilot dalam Google Workspace menggunakan use case seperti ringkasan e-mel, draf dokumen, analisis spreadsheet, penyediaan slide dan ringkasan mesyuarat."
    }
  },
  en: {
    chatgpt_codex: {
      name: "ChatGPT + Codex",
      scoreLabel: "ChatGPT + Codex",
      shortDescription:
        "ChatGPT + Codex may fit users who want a balanced AI ecosystem for general work and system development. It can support ideation, writing, analysis, prompts and coding tasks such as debugging, refactoring and feature building.",
      reason:
        "Based on your answers, this option is more suitable because your needs show a mix of general work, writing, analysis, prompts and system development. It fits users who want one AI ecosystem that can support work from ideas through code implementation.",
      suitableFor: [
        "Users who want a general-purpose AI assistant",
        "Developers or ICT officers",
        "Teams building applications",
        "Users who need both document work and coding support"
      ],
      considerations: [
        "Provide clear data-use guidelines",
        "AI output should be reviewed by humans",
        "Generated code should be tested",
        "Do not enter confidential data without organizational approval"
      ],
      nextStep:
        "Run a small pilot using use cases such as document preparation, debugging, refactoring and building a simple feature."
    },
    claude_claude_code: {
      name: "Claude.ai + Claude Code",
      scoreLabel: "Claude.ai + Claude Code",
      shortDescription:
        "Claude.ai + Claude Code may fit users who prioritize reasoning, detailed explanation, long document analysis, technical documentation and careful coding. It suits users who want AI to act like a thinking partner or technical mentor.",
      reason:
        "Based on your answers, this option is more suitable because your needs emphasize reasoning, detailed explanation, long document analysis, technical documentation and careful coding. It fits users who want AI to act like a thinking partner or technical mentor.",
      suitableFor: [
        "Users who often perform analysis and strategic writing",
        "Developers who want to understand code deeply",
        "Teams that value review, explanation and documentation",
        "Users who want controlled terminal-based coding support"
      ],
      considerations: [
        "Control terminal permissions carefully",
        "Review code changes before accepting them",
        "Understand subscription usage limits",
        "Manage sensitive data according to organizational policy"
      ],
      nextStep:
        "Run a pilot for long document analysis, code review, guided debugging and technical documentation preparation."
    },
    gemini_workspace: {
      name: "Gemini / Gemini for Google Workspace",
      scoreLabel: "Gemini / Google Workspace",
      shortDescription:
        "Gemini / Gemini for Google Workspace may fit organizations that use Google Workspace heavily, including Gmail, Docs, Sheets, Slides, Drive and Meet. It is suitable when the organization wants AI inside daily officer workflows.",
      reason:
        "Based on your answers, this option is more suitable because your needs are strongly connected to Google Workspace, including Gmail, Docs, Sheets, Slides, Drive and Meet. It fits organizations that want AI directly within daily work routines.",
      suitableFor: [
        "Organizations actively using Google Workspace",
        "Non-technical officers",
        "Users who work heavily with email, documents, spreadsheets, slides and meetings",
        "Teams that want AI inside existing workflows"
      ],
      considerations: [
        "Review admin settings and access control",
        "Ensure organizational data policies are clear",
        "Assess Workspace plan suitability",
        "For coding, also review Gemini Code Assist or Gemini CLI suitability"
      ],
      nextStep:
        "Run a Google Workspace pilot using use cases such as email summaries, document drafts, spreadsheet analysis, slide preparation and meeting summaries."
    }
  }
};
