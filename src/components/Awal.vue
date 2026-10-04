<script setup lang="ts">
import { parameters, triangle, arithmetic, primes } from '../state';
</script>

<template>
  <section class="section-title">
    <div>
      <h2>Hasil eksplorasi</h2>
      <p>Tiga soal. Satu NIM. Semua hasil dalam satu tempat.</p>
    </div>
    <span class="live-tag"><span class="status-dot"></span> Hasil perhitungan</span>
  </section>
  <div class="exercise-grid">
    <article class="exercise-card triangle-card">
      <div class="card-top">
        <span class="exercise-icon">△</span><span class="exercise-number">SOAL 01</span>
      </div>
      <h3>Pola segitiga</h3>
      <p>Susun angka, baris demi baris.</p>
      <div class="parameter-row">
        <span>Tinggi segitiga</span
        ><strong>{{ parameters.height }} <small>baris</small></strong>
      </div>
      <div class="result-box triangle-output">
        <pre v-if="triangle.length">{{ triangle.join('\n') }}</pre>
        <p v-else>Tinggi 0: tidak ada baris.</p>
      </div>
      <RouterLink
        to="/segitiga"
        class="detail-link"
        >Lihat langkah & kode <span>↗</span></RouterLink
      >
    </article>
    <article class="exercise-card arithmetic-card">
      <div class="card-top">
        <span class="exercise-icon">↗</span><span class="exercise-number">SOAL 02</span>
      </div>
      <h3>Deret aritmatika</h3>
      <p>Temukan ritme di setiap langkah.</p>
      <div class="parameter-row">
        <span
          >Awal <strong>{{ parameters.start }}</strong></span
        ><span
          >Beda <strong>+{{ parameters.step }}</strong></span
        >
      </div>
      <div class="result-box">
        <div class="number-grid">
          <span
            v-for="(number, index) in arithmetic"
            :key="index"
            >{{ number }}</span
          >
        </div>
        <div class="result-caption">10 angka pertama · Uₙ = a + (n − 1)b</div>
      </div>
      <RouterLink
        to="/aritmatika"
        class="detail-link"
        >Lihat langkah & kode <span>↗</span></RouterLink
      >
    </article>
    <article class="exercise-card prime-card">
      <div class="card-top">
        <span class="exercise-icon">#</span><span class="exercise-number">SOAL 03</span>
      </div>
      <h3>Bilangan prima</h3>
      <p>Angka yang hanya punya dua faktor.</p>
      <div class="parameter-row">
        <span>Batas pencarian</span><strong>1–{{ parameters.primeLimit }}</strong>
      </div>
      <div class="result-box">
        <div class="prime-grid">
          <span
            v-for="number in primes"
            :key="number"
            >{{ number }}</span
          >
        </div>
        <div class="result-caption">{{ primes.length }} bilangan prima ditemukan</div>
      </div>
      <RouterLink
        to="/prima"
        class="detail-link"
        >Lihat langkah & kode <span>↗</span></RouterLink
      >
    </article>
  </div>
  <div class="insight-panel">
    <span class="insight-icon">✳</span>
    <div>
      <h3>Bagaimana NIM diterjemahkan?</h3>
      <p>
        <strong>{{ parameters.nim.slice(-1) }}</strong> → tinggi segitiga <span>·</span>
        <strong>{{ parameters.nim.slice(-2) }}</strong> → awal deret & batas prima
        <span>·</span> <strong>{{ parameters.nim.at(-3) }} + 1</strong> → beda deret
      </p>
    </div>
    <RouterLink to="/tentang">Pelajari rumus →</RouterLink>
  </div>
</template>
