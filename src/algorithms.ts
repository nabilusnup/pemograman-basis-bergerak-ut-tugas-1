export const DEFAULT_NIM = '054727057';

export interface NimParameters {
  nim: string;
  height: number;
  start: number;
  step: number;
  primeLimit: number;
}

export function parseNim(nim: string): NimParameters {
  if (!/^\d{9}$/.test(nim)) {
    throw new Error('NIM harus terdiri dari tepat 9 digit angka.');
  }
  const start = Number(nim.slice(-2));
  return {
    nim,
    height: Number(nim.slice(-1)),
    start,
    step: Number(nim.at(-3)) + 1,
    primeLimit: start + 10,
  };
}

export function createTriangle(height: number): string[] {
  if (!Number.isInteger(height) || height < 0) {
    throw new Error('Tinggi harus berupa bilangan bulat nonnegatif.');
  }
  const rows: string[] = [];
  for (let row = 1; row <= height; row++) {
    const numbers: number[] = [];
    for (let number = 1; number <= row; number++) {
      numbers.push(number);
    }

    rows.push(numbers.join(' '));
  }
  return rows;
}

export function createArithmeticSequence(start: number, step: number): number[] {
  const numbers: number[] = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(start + i * step);
  }

  return numbers;
}

export function isPrime(number: number): boolean {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

export function findPrimes(limit: number): number[] {
  const primes: number[] = [];
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }

  return primes;
}
