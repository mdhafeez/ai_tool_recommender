export const platforms = {
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
};
