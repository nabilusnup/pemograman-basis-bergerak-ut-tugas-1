import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseNim,
  createTriangle,
  createArithmeticSequence,
  findPrimes,
  isPrime,
} from '../console-dist/algorithms.js';

test('NIM pengguna mempertahankan nol awal dan menghasilkan parameter yang benar', () => {
  assert.deepEqual(parseNim('054727057'), {
    nim: '054727057',
    height: 7,
    start: 57,
    step: 1,
    primeLimit: 67,
  });
  assert.deepEqual(createTriangle(7), [
    '1',
    '1 2',
    '1 2 3',
    '1 2 3 4',
    '1 2 3 4 5',
    '1 2 3 4 5 6',
    '1 2 3 4 5 6 7',
  ]);
  assert.deepEqual(
    createArithmeticSequence(57, 1),
    [57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
  );
  assert.deepEqual(
    findPrimes(67),
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67],
  );
});
test('hasil sesuai contoh dalam soal', () => {
  const p = parseNim('230411013');
  assert.deepEqual(createTriangle(p.height), ['1', '1 2', '1 2 3']);
  assert.deepEqual(
    createArithmeticSequence(p.start, p.step),
    [13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  );
  assert.deepEqual(findPrimes(p.primeLimit), [2, 3, 5, 7, 11, 13, 17, 19, 23]);
});
test('NIM lain dan kasus batas', () => {
  const p = parseNim('123456789');
  assert.equal(p.step, 8);
  assert.deepEqual(
    createArithmeticSequence(p.start, p.step),
    [89, 97, 105, 113, 121, 129, 137, 145, 153, 161],
  );
  assert.deepEqual(createTriangle(parseNim('000000000').height), []);
  assert.deepEqual(findPrimes(1), []);
  for (const n of [0, 1, 4, 9, 25, 49, 121, 2.5]) assert.equal(isPrime(n), false);
  for (const n of [2, 3, 67, 97]) assert.equal(isPrime(n), true);
  for (const nim of ['', '54727057', '0547270570', '05472705a', ' 054727057'])
    assert.throws(() => parseNim(nim));
});
