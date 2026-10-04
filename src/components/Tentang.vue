<template>
  <section class="section-title">
    <div>
      <h2>Tentang praktikum</h2>
      <p>Logika TypeScript dengan navigasi Vue Router.</p>
    </div>
  </section>
  <section class="detail-panel about-panel">
    <span class="panel-label">MSIM4401 · AKTIVITAS 04</span>
    <h3>Satu aplikasi, tiga latihan</h3>
    <p>
      Aplikasi ini menyelesaikan tiga soal pemrograman berdasarkan NIM 054727057: pola
      segitiga, deret aritmatika, dan pencarian bilangan prima. NIM disimpan sebagai teks
      agar angka nol di awal tetap terjaga.
    </p>
    <h3>Rumus yang digunakan</h3>
    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Soal</th>
            <th>Aturan</th>
            <th>Hasil NIM 054727057</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Segitiga</td>
            <td>Digit terakhir</td>
            <td>Tinggi 7 baris</td>
          </tr>
          <tr>
            <td>Aritmatika</td>
            <td>Awal = 2 digit terakhir; beda = digit ke-3 dari belakang + 1</td>
            <td>Awal 57, beda 1</td>
          </tr>
          <tr>
            <td>Prima</td>
            <td>Batas = 2 digit terakhir + 10</td>
            <td>Batas 67</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="formula-note">
      Kalimat soal 2 menyebut digit ketiga sebagai beda, sedangkan contohnya menambahkan
      1. Aplikasi mengikuti rumus pada contoh, sehingga digit 0 menghasilkan beda 1.
    </p>
    <h3>Referensi PDF</h3>
    <p>
      <cite>MSIM4401_MDL2 Aktivitas 04 Final.pdf</cite>, Aktivitas 4: Praktikum Vue
      Lanjutan (1), bagian Routing dan Navigasi, halaman cetak 4.5–4.8. Referensi
      diterapkan melalui <code>createApp().use(router)</code>, <code>RouterLink</code>,
      dan <code>RouterView</code>.
    </p>
    <p>
      Aplikasi memakai hash routing agar tautan setiap halaman bisa dibuka ulang pada
      server statis atau Laragon tanpa konfigurasi rewrite.
    </p>
    <RouterLink
      to="/"
      class="detail-link"
      >Kembali ke hasil perhitungan <span>→</span></RouterLink
    >
  </section>
</template>
