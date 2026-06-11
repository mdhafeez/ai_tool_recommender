# Penasihat Pilihan AI

Penasihat Pilihan AI ialah mini web tool untuk membantu pengguna menilai pilihan AI yang lebih sesuai berdasarkan corak kerja, tahap teknikal, keperluan coding, dokumentasi, analisis, ekosistem organisasi dan pertimbangan tadbir urus data.

Alat ini membandingkan tiga kategori:

- ChatGPT + Codex
- Claude.ai + Claude Code
- Gemini / Gemini for Google Workspace + Gemini Code Assist

## Tujuan Aplikasi

Tujuan utama aplikasi ini ialah memberi cadangan awal tentang kategori AI yang lebih sesuai berdasarkan jawapan pengguna. Aplikasi ini tidak menyatakan bahawa satu platform lebih baik secara mutlak berbanding platform lain.

## Cara Skor Cadangan AI Berfungsi

Soalan cadangan AI berada dalam:

```text
src/data/questions.js
```

Setiap jawapan menambah mata kepada satu atau lebih kategori AI melalui objek `scores`:

```js
scores: {
  chatgpt_codex: 3,
  claude_claude_code: 2,
  gemini_workspace: 1
}
```

Selepas soalan cadangan AI dijawab, aplikasi mengira jumlah skor, menyusun skor tertinggi ke terendah, dan memaparkan cadangan utama serta pilihan kedua.

## Skor Etika Adalah Berasingan

Penilaian etika tidak menambah atau mengurangkan skor mana-mana platform AI. Jawapan etika hanya digunakan untuk menilai tahap kesediaan penggunaan AI secara bertanggungjawab.

Ini penting supaya cadangan platform kekal neutral dan berdasarkan keperluan kerja pengguna, bukan berdasarkan jenama atau andaian bahawa satu platform lebih selamat daripada platform lain.

## Penilaian Etika Asas

Tiga soalan etika asas berada dalam:

```text
src/data/basicEthicsQuestions.js
```

Soalan ini mengira skor risiko etika asas dan memaparkan status:

- `Baik` untuk skor 0 hingga 2
- `Sederhana` untuk skor 3 hingga 5
- `Perlu Perhatian` untuk skor 6 hingga 9

Status ini dipaparkan pada halaman keputusan utama di bawah cadangan platform AI.

## Penilaian Etika AI Lanjutan

Penilaian lanjutan adalah pilihan. Pengguna boleh memilih butang `Semak Etika AI Dengan Lebih Terperinci` pada halaman keputusan.

Soalan lanjutan berada dalam:

```text
src/data/advancedEthicsQuestions.js
```

Penilaian lanjutan menghasilkan laporan ringkas yang mengandungi:

- Status keseluruhan
- Skor risiko etika
- Ringkasan mengikut prinsip
- Perkara yang perlu diberi perhatian
- Cadangan tindakan susulan

## Pemetaan Prinsip Etika AI JDN

Tujuh soalan etika lanjutan dipetakan kepada prinsip berikut:

- Keadilan
- Kebolehpercayaan, Keselamatan dan Kawalan
- Privasi dan Keselamatan Data
- Keterangkuman
- Ketelusan
- Akauntabiliti
- Kesejahteraan Manusia dan Sosial

## Cara Edit Teks Cadangan Platform

Maklumat platform, sebab cadangan, senarai kesesuaian, perhatian dan tindakan seterusnya berada dalam:

```text
src/data/platforms.js
```

Edit teks di situ jika organisasi mahu menyesuaikan bahasa, polisi dalaman atau contoh use case.

## Cara Edit Skor Etika

Untuk penilaian asas, edit nilai `ethicsRisk` dalam:

```text
src/data/basicEthicsQuestions.js
```

Untuk penilaian lanjutan, edit nilai `risk` dalam:

```text
src/data/advancedEthicsQuestions.js
```

Pastikan skor etika kekal berasingan daripada `scores` platform AI.

## Cara Jalankan Secara Lokal

```bash
npm install
npm run dev
```

Pada Windows PowerShell, jika `npm.ps1` disekat oleh execution policy, gunakan:

```bash
npm.cmd run dev
```

Kemudian buka URL yang dipaparkan oleh Vite, biasanya:

```text
http://127.0.0.1:5173
```

Untuk semak build deployment:

```bash
npm.cmd run build
```

## Nota Penting

Alat ini bersifat nasihat awal sahaja. Ia tidak menggantikan dasar rasmi organisasi, nasihat perundangan, garis panduan keselamatan data atau penilaian risiko yang lebih menyeluruh. Keputusan akhir perlu disahkan melalui pilot kecil, semakan dasar organisasi, keselamatan data, bajet, integrasi sistem dan keperluan pengguna sebenar.
