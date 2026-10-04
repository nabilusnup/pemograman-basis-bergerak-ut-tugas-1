import {
  DEFAULT_NIM,
  parseNim,
  createTriangle,
  createArithmeticSequence,
  findPrimes,
} from './algorithms.js';

const { height, start, step, primeLimit } = parseNim(DEFAULT_NIM);
console.log(`NIM: ${DEFAULT_NIM}`);
console.log(`\nSoal 1 — Pola Segitiga (tinggi ${height})`);
console.log(createTriangle(height).join('\n') || 'Tinggi 0: tidak ada baris.');
console.log(`\nSoal 2 — Deret Aritmatika (awal ${start}, beda ${step})`);
console.log(createArithmeticSequence(start, step).join(', '));
console.log(`\nSoal 3 — Bilangan Prima (batas ${primeLimit})`);
console.log(findPrimes(primeLimit).join(', '));
