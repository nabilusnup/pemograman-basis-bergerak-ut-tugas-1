import { computed, ref } from 'vue';
import {
  DEFAULT_NIM,
  parseNim,
  createTriangle,
  createArithmeticSequence,
  findPrimes,
} from './algorithms';

export const nim = ref(DEFAULT_NIM);
export const parameters = computed(() => parseNim(nim.value));
export const triangle = computed(() => createTriangle(parameters.value.height));
export const arithmetic = computed(() =>
  createArithmeticSequence(parameters.value.start, parameters.value.step),
);
export const primes = computed(() => findPrimes(parameters.value.primeLimit));
