# Penasihat Pilihan AI

Penasihat Pilihan AI ialah mini web tool untuk membantu pengguna menilai pilihan AI yang lebih sesuai berdasarkan corak kerja, tahap teknikal, keperluan coding, dokumentasi, analisis, ekosistem organisasi dan pertimbangan tadbir urus data.

Alat ini membandingkan tiga kategori:

- ChatGPT + Codex
- Claude.ai + Claude Code
- Gemini / Gemini for Google Workspace + Gemini Code Assist

## Cara Skor Berfungsi

Setiap jawapan menambah mata kepada satu atau lebih kategori AI. Selepas semua 10 soalan dijawab, aplikasi mengira jumlah skor, menyusun skor tertinggi ke terendah, dan memaparkan:

- Cadangan utama
- Pilihan kedua yang juga boleh dipertimbangkan
- Skor ringkas
- Sebab cadangan
- Perkara yang perlu diberi perhatian
- Cadangan tindakan seterusnya

Jika dua skor tertinggi berbeza 3 mata atau kurang, aplikasi memaparkan mesej bahawa keputusan hampir seimbang. Jika ketiga-tiga skor hampir sama, aplikasi mencadangkan penilaian lanjut berdasarkan ekosistem kerja, dasar data, bajet dan keperluan sebenar pengguna.

## Cara Edit Soalan

Soalan dan skor berada dalam:

```text
src/data/questions.js
```

Setiap pilihan mempunyai objek `scores` seperti:

```js
scores: {
  chatgpt_codex: 3,
  claude_claude_code: 2,
  gemini_workspace: 1
}
```

Gunakan mata antara 1 hingga 5 dan pastikan pemberat kekal seimbang supaya setiap kategori mempunyai peluang realistik untuk menjadi cadangan utama.

## Cara Edit Teks Cadangan

Maklumat platform, sebab cadangan, senarai kesesuaian, perhatian dan tindakan seterusnya berada dalam:

```text
src/data/platforms.js
```

Edit teks di situ jika organisasi mahu menyesuaikan bahasa, polisi dalaman atau contoh use case.

## Cara Jalankan Secara Lokal

```bash
npm install
npm run dev
```

Kemudian buka URL yang dipaparkan oleh Vite, biasanya:

```text
http://127.0.0.1:5173
```

## Nota Penting

Alat ini bersifat nasihat awal sahaja. Ia tidak menyatakan bahawa satu platform sentiasa lebih sesuai berbanding platform lain. Keputusan akhir perlu disahkan melalui pilot kecil, semakan dasar organisasi, keselamatan data, bajet, integrasi sistem dan keperluan pengguna sebenar.
