export const platforms = {
  ms: {
    chatgpt_codex: {
      name: "ChatGPT + Codex",
      scoreLabel: "ChatGPT + Codex",
      shortDescription:
        "ChatGPT + Codex sesuai jika pengguna mahukan satu ekosistem AI yang seimbang untuk kerja umum dan pembangunan sistem.",
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
        "Claude.ai + Claude Code sesuai jika pengguna mengutamakan reasoning, penerangan mendalam, analisis dokumen panjang, dokumentasi teknikal dan coding secara berhati-hati.",
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
        "Gemini / Gemini for Google Workspace sesuai jika organisasi banyak menggunakan Google Workspace seperti Gmail, Docs, Sheets, Slides, Drive dan Meet.",
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
    },
    microsoft_copilot: {
      name: "Microsoft Copilot",
      scoreLabel: "Microsoft Copilot",
      shortDescription:
        "Microsoft Copilot sesuai jika organisasi banyak menggunakan Microsoft 365 seperti Word, Excel, PowerPoint, Outlook dan Teams.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda berkait rapat dengan produktiviti pejabat dalam ekosistem Microsoft 365. Ia sesuai untuk pengguna yang mahu AI menyokong dokumen, e-mel, mesyuarat, spreadsheet dan pembentangan dalam aliran kerja Microsoft.",
      suitableFor: [
        "Organisasi yang menggunakan Microsoft 365 secara aktif",
        "Pegawai umum dan pengurus",
        "Pengguna yang banyak bekerja dengan Word, Excel, PowerPoint, Outlook atau Teams",
        "Pasukan yang mahu AI dalam aliran kerja pejabat sedia ada"
      ],
      considerations: [
        "Semak tetapan admin dan polisi data Microsoft 365",
        "Pastikan kawalan akses dan perkongsian dokumen jelas",
        "Output AI perlu disemak sebelum digunakan secara rasmi",
        "Nilai kesesuaian lesen organisasi"
      ],
      nextStep:
        "Jalankan pilot menggunakan use case seperti draf dokumen, analisis Excel, ringkasan e-mel, penyediaan slide dan ringkasan mesyuarat."
    },
    kimi: {
      name: "Kimi",
      scoreLabel: "Kimi",
      shortDescription:
        "Kimi sesuai untuk analisis dokumen dan fail yang sangat panjang, deep research, sintesis pelbagai sumber serta tugasan coding berasaskan ejen.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda menekankan konteks yang panjang, analisis banyak dokumen, penyelidikan mendalam, reasoning atau tugasan coding berbilang langkah. Kekuatan khusus Kimi ialah memproses bahan yang besar sambil mengekalkan konteks serta menyediakan aliran kerja ejen untuk research, dokumen dan kod.",
      suitableFor: [
        "Penyelidik yang perlu mensintesis banyak sumber dan menghasilkan laporan panjang",
        "Pengguna yang menganalisis PDF, Word, spreadsheet, slaid atau koleksi fail yang besar",
        "Developer yang membuat analisis repositori, debugging atau refactoring berbilang fail",
        "Pasukan yang mahu menguji aliran kerja ejen untuk research dan penghasilan dokumen"
      ],
      considerations: [
        "Kapasiti konteks dan ciri tertentu bergantung pada model serta pelan langganan",
        "Sumber research, fakta semasa dan output teknikal masih perlu disahkan manusia",
        "Semak lokasi pemprosesan, polisi privasi dan kesesuaian data organisasi",
        "Uji mutu Bahasa Malaysia dan istilah domain menggunakan bahan sebenar organisasi"
      ],
      nextStep:
        "Jalankan pilot menggunakan set dokumen panjang dan repositori contoh; nilai ketepatan petikan, kualiti sintesis, konsistensi konteks, hasil coding, masa dan kos."
    },
    deepseek: {
      name: "DeepSeek",
      scoreLabel: "DeepSeek",
      shortDescription:
        "DeepSeek sesuai untuk pengguna yang mahu menilai pilihan AI bagi reasoning teknikal, coding, matematik atau penggunaan yang sensitif kepada kos.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda menekankan coding, reasoning teknikal, tugasan logik atau perbandingan pilihan AI yang lebih kos efektif. Ia sesuai untuk pasukan yang mahu menguji alternatif AI secara terkawal.",
      suitableFor: [
        "Developer atau pasukan teknikal",
        "Pengguna yang banyak membuat tugasan logik, matematik atau coding",
        "Organisasi yang mahu membandingkan pilihan kos",
        "Pasukan yang menilai alternatif model AI"
      ],
      considerations: [
        "Semak polisi data dan lokasi pemprosesan yang dibenarkan organisasi",
        "Nilai kesesuaian model untuk bahasa, domain dan keselamatan data",
        "Output teknikal perlu diuji dan disemak manusia",
        "Pastikan penggunaan mematuhi dasar organisasi"
      ],
      nextStep:
        "Jalankan pilot terhad untuk coding, semakan logik, contoh kod, analisis teknikal dan perbandingan kos berdasarkan use case sebenar."
    },
    perplexity: {
      name: "Perplexity",
      scoreLabel: "Perplexity",
      shortDescription:
        "Perplexity sesuai untuk carian maklumat, penyelidikan ringkas, perbandingan sumber dan tugasan yang memerlukan rujukan atau pautan.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda menekankan pencarian maklumat, semakan sumber, perbandingan pilihan dan penyelidikan pantas. Ia sesuai sebagai alat sokongan research, bukan pengganti semakan rasmi.",
      suitableFor: [
        "Pegawai penyelidik atau latihan",
        "Pengguna yang kerap mencari maklumat semasa",
        "Pasukan yang memerlukan perbandingan sumber",
        "Pengguna yang mahu jawapan dengan rujukan untuk semakan lanjut"
      ],
      considerations: [
        "Semak sumber asal sebelum membuat keputusan rasmi",
        "Maklumat semasa boleh berubah dan perlu disahkan",
        "Jangan masukkan data sulit dalam carian",
        "Gunakan sebagai sokongan research, bukan kelulusan akhir"
      ],
      nextStep:
        "Jalankan pilot untuk research ringkas, perbandingan polisi, semakan sumber dan penyediaan nota awal berdasarkan rujukan."
    },
    github_copilot: {
      name: "GitHub Copilot",
      scoreLabel: "GitHub Copilot",
      shortDescription:
        "GitHub Copilot sesuai untuk developer yang mahukan bantuan coding terus dalam IDE, code completion dan sokongan kerja harian pembangunan perisian.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda banyak berkait dengan pembangunan kod dalam IDE, GitHub dan kerja developer harian. Ia sesuai untuk mempercepat cadangan kod, boilerplate, ujian dan pair-programming ringan.",
      suitableFor: [
        "Developer dan pasukan software engineering",
        "Pengguna VS Code atau IDE yang disokong",
        "Pasukan yang banyak bekerja dengan GitHub",
        "Developer yang mahu bantuan code completion dan contoh kod"
      ],
      considerations: [
        "Kod cadangan perlu disemak dan diuji",
        "Pastikan polisi organisasi terhadap repositori dan data kod jelas",
        "Jangan terima cadangan kod tanpa memahami implikasi keselamatan",
        "Tetapkan garis panduan penggunaan untuk pasukan developer"
      ],
      nextStep:
        "Jalankan pilot dalam projek kecil untuk code completion, unit test, refactoring ringan dan dokumentasi fungsi."
    },
    open_source_llm: {
      name: "Open-source / Self-hosted LLM",
      scoreLabel: "Open-source / Self-hosted LLM",
      shortDescription:
        "Open-source atau self-hosted LLM sesuai jika organisasi memerlukan kawalan data, penyesuaian model atau deployment dalam infrastruktur sendiri.",
      reason:
        "Berdasarkan jawapan anda, pilihan ini lebih sesuai kerana keperluan anda menekankan kawalan data, governance, integrasi dalaman atau keupayaan menyesuaikan model. Ia sesuai untuk organisasi yang mempunyai kapasiti teknikal dan keperluan keselamatan yang lebih khusus.",
      suitableFor: [
        "Organisasi yang memerlukan kawalan data lebih tinggi",
        "Pasukan teknikal dengan infrastruktur dan kepakaran AI",
        "Use case dalaman yang memerlukan penyesuaian model",
        "Organisasi yang mahu mengurangkan pergantungan kepada satu penyedia"
      ],
      considerations: [
        "Memerlukan kepakaran teknikal dan kos operasi infrastruktur",
        "Perlu kawalan keselamatan, pemantauan dan penyelenggaraan",
        "Prestasi perlu diuji berdasarkan data dan use case sebenar",
        "Tadbir urus model dan akses pengguna perlu jelas"
      ],
      nextStep:
        "Jalankan proof of concept kecil dengan data tidak sulit, benchmark prestasi, kos operasi dan keperluan keselamatan sebelum peluasan."
    }
  },
  en: {
    chatgpt_codex: {
      name: "ChatGPT + Codex",
      scoreLabel: "ChatGPT + Codex",
      shortDescription:
        "ChatGPT + Codex may fit users who want a balanced AI ecosystem for general work and system development.",
      reason:
        "Based on your answers, this option is more suitable because your needs show a mix of general work, writing, analysis, prompts and system development.",
      suitableFor: ["General-purpose AI users", "Developers or ICT officers", "Application teams", "Document and coding workflows"],
      considerations: ["Provide data-use guidelines", "Review AI output", "Test generated code", "Protect confidential data"],
      nextStep: "Run a small pilot for document work, debugging, refactoring and simple feature building."
    },
    claude_claude_code: {
      name: "Claude.ai + Claude Code",
      scoreLabel: "Claude.ai + Claude Code",
      shortDescription:
        "Claude.ai + Claude Code may fit users who prioritize reasoning, long documents, technical documentation and careful coding.",
      reason:
        "Based on your answers, this option is more suitable because your needs emphasize reasoning, detailed explanation and careful coding.",
      suitableFor: ["Strategic writing users", "Developers learning code deeply", "Documentation teams", "Careful code review workflows"],
      considerations: ["Control terminal permissions", "Review code changes", "Understand usage limits", "Manage sensitive data"],
      nextStep: "Run a pilot for long document analysis, code review, guided debugging and technical documentation."
    },
    gemini_workspace: {
      name: "Gemini / Gemini for Google Workspace",
      scoreLabel: "Gemini / Google Workspace",
      shortDescription:
        "Gemini may fit organizations that use Google Workspace heavily, including Gmail, Docs, Sheets, Slides, Drive and Meet.",
      reason:
        "Based on your answers, this option is more suitable because your needs are strongly connected to Google Workspace workflows.",
      suitableFor: ["Google Workspace organizations", "Non-technical officers", "Email and document users", "Workspace-integrated teams"],
      considerations: ["Review admin settings", "Clarify data policy", "Assess Workspace plan suitability", "Review coding add-ons if needed"],
      nextStep: "Run a Google Workspace pilot for email summaries, document drafts, spreadsheet analysis, slides and meetings."
    },
    microsoft_copilot: {
      name: "Microsoft Copilot",
      scoreLabel: "Microsoft Copilot",
      shortDescription: "Microsoft Copilot may fit organizations using Microsoft 365 workflows.",
      reason: "Based on your answers, this option is more suitable because your needs align with Word, Excel, PowerPoint, Outlook or Teams.",
      suitableFor: ["Microsoft 365 organizations", "General officers", "Managers", "Office productivity teams"],
      considerations: ["Review admin controls", "Clarify access policy", "Review AI output", "Assess licensing suitability"],
      nextStep: "Run a pilot for Word documents, Excel analysis, email summaries, slides and meeting notes."
    },
    kimi: {
      name: "Kimi",
      scoreLabel: "Kimi",
      shortDescription: "Kimi may fit ultra-long document and file analysis, deep research, multi-source synthesis and agentic coding.",
      reason: "Based on your answers, this option is more suitable because your needs emphasize long context, large document sets, deep research, reasoning or multi-step coding. Kimi's specialty is maintaining context across large inputs while supporting agent workflows for research, documents and code.",
      suitableFor: ["Multi-source researchers", "Large document and file analysis", "Repository-scale coding workflows", "Research and document agents"],
      considerations: ["Features and context limits vary by model and plan", "Verify sources and technical output", "Review privacy and data-processing policy", "Pilot domain and language quality"],
      nextStep: "Pilot Kimi with long documents and a sample repository; measure citation accuracy, synthesis quality, context consistency, coding results, time and cost."
    },
    deepseek: {
      name: "DeepSeek",
      scoreLabel: "DeepSeek",
      shortDescription: "DeepSeek may fit technical reasoning, coding, math or cost-sensitive AI evaluation.",
      reason: "Based on your answers, this option is more suitable because your needs emphasize coding, technical reasoning or cost comparison.",
      suitableFor: ["Developers", "Technical teams", "Logic or math-heavy work", "Cost-sensitive evaluations"],
      considerations: ["Review data policy", "Assess model fit", "Test technical output", "Follow organizational rules"],
      nextStep: "Run a limited pilot for coding, technical analysis, logic checks and cost comparison."
    },
    perplexity: {
      name: "Perplexity",
      scoreLabel: "Perplexity",
      shortDescription: "Perplexity may fit research, source comparison and quick information discovery.",
      reason: "Based on your answers, this option is more suitable because your needs emphasize research, source checking and current information discovery.",
      suitableFor: ["Research users", "Training officers", "Policy comparison tasks", "Source-aware information discovery"],
      considerations: ["Verify primary sources", "Check current facts", "Avoid confidential data", "Use as research support"],
      nextStep: "Run a pilot for source comparison, research notes and information discovery."
    },
    github_copilot: {
      name: "GitHub Copilot",
      scoreLabel: "GitHub Copilot",
      shortDescription: "GitHub Copilot may fit developers who want IDE-based coding assistance and code completion.",
      reason: "Based on your answers, this option is more suitable because your needs are tied to IDE, GitHub and daily developer workflows.",
      suitableFor: ["Developers", "Software teams", "VS Code or IDE users", "GitHub-based teams"],
      considerations: ["Review generated code", "Test outputs", "Clarify repo policy", "Set team usage guidelines"],
      nextStep: "Run a pilot for code completion, unit tests, refactoring and function documentation."
    },
    open_source_llm: {
      name: "Open-source / Self-hosted LLM",
      scoreLabel: "Open-source / Self-hosted LLM",
      shortDescription: "Open-source or self-hosted LLMs may fit organizations needing data control, customization or internal deployment.",
      reason: "Based on your answers, this option is more suitable because your needs emphasize data control, governance or custom deployment.",
      suitableFor: ["Data-sensitive organizations", "Technical AI teams", "Custom internal use cases", "Self-hosting evaluations"],
      considerations: ["Requires technical expertise", "Plan infrastructure cost", "Monitor security", "Benchmark real use cases"],
      nextStep: "Run a proof of concept with non-sensitive data, benchmark performance and review operational requirements."
    }
  }
};
