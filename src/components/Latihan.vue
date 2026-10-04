<script setup lang="ts">
import { computed } from 'vue';
import { parameters, triangle, arithmetic, primes } from '../state';
import algorithmSource from '../algorithms.ts?raw';

const props = defineProps<{ kind: 'triangle' | 'arithmetic' | 'prime' }>();
const content = computed(() => {
  const p = parameters.value;
  if (props.kind === 'triangle')
    return {
      number: '01',
      title: 'Pola segitiga angka',
      description: `Digit terakhir NIM ${p.nim} adalah ${p.height}, sehingga tinggi segitiga ${p.height} baris.`,
      steps: [
        'Ambil digit terakhir NIM sebagai tinggi.',
        'Ulangi baris dari 1 sampai tinggi segitiga.',
        'Pada setiap baris, cetak angka 1 sampai nomor baris.',
      ],
      output: triangle.value.join('\n') || 'Tinggi 0: tidak ada baris.',
      functionName: 'createTriangle',
      call: `console.log(createTriangle(${p.height}).join('\\n'));`,
    };
  if (props.kind === 'arithmetic')
    return {
      number: '02',
      title: 'Deret aritmatika',
      description: `Dua digit terakhir adalah ${p.start}. Digit ketiga dari belakang adalah ${p.nim.at(-3)}, sehingga beda = ${p.nim.at(-3)} + 1 = ${p.step}.`,
      steps: [
        `Tetapkan angka awal a = ${p.start}.`,
        `Tetapkan beda b = digit ketiga dari belakang + 1 = ${p.step}.`,
        'Cetak 10 suku dengan rumus Uₙ = a + (n - 1) x b.',
      ],
      output: arithmetic.value.join(', '),
      functionName: 'createArithmeticSequence',
      call: `console.log(createArithmeticSequence(${p.start}, ${p.step}).join(', '));`,
    };
  return {
    number: '03',
    title: 'Bilangan prima',
    description: `Dua digit terakhir adalah ${p.start}. Batas pencarian = ${p.start} + 10 = ${p.primeLimit}.`,
    steps: [
      `Periksa bilangan dari 1 sampai ${p.primeLimit}.`,
      'Bilangan 1 bukan prima; mulai pemeriksaan dari 2.',
      'Uji pembagi dari 2 sampai akar bilangan. Jika tidak ada pembagi, bilangan tersebut prima.',
    ],
    output: primes.value.join(', '),
    functionName: 'isPrime',
    call: `console.log(findPrimes(${p.primeLimit}).join(', '));`,
  };
});
const source = computed(() => {
  const start = algorithmSource.indexOf('export function ' + content.value.functionName);
  const next =
    props.kind === 'prime'
      ? algorithmSource.length
      : algorithmSource.indexOf('\nexport function ', start + 1);
  return (
    algorithmSource.slice(start, next === -1 ? undefined : next).trim() +
    '\n\n' +
    content.value.call
  );
});
</script>

<template>
  <section class="section-title">
    <div>
      <RouterLink
        to="/"
        class="back-link"
        >← Kembali ke ringkasan</RouterLink
      >
      <h2>Soal {{ content.number }} · {{ content.title }}</h2>
      <p>{{ content.description }}</p>
    </div>
  </section>
  <div class="detail-grid">
    <section class="detail-panel">
      <span class="panel-label">LANGKAH PENYELESAIAN</span>
      <ol class="steps">
        <li
          v-for="step in content.steps"
          :key="step"
        >
          {{ step }}
        </li>
      </ol>
      <h3>Output program</h3>
      <pre class="large-output">{{ content.output }}</pre>
      <p
        v-if="kind === 'arithmetic'"
        class="formula-note"
      >
        Beda mengikuti contoh pada soal: digit ketiga dari belakang ditambah 1.
      </p>
      <p
        v-if="kind === 'prime'"
        class="formula-note"
      >
        Ditemukan {{ primes.length }} bilangan prima.
      </p>
    </section>
    <section class="code-panel">
      <div class="code-header"><span>Implementasi TypeScript</span><span>.ts</span></div>
      <pre><code>{{ source }}</code></pre>
    </section>
  </div>
</template>
