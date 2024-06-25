/**
 * Aula 58
 * Arrays - filter + map + reduce
 * 24.06.2024
 */

// Somar o dobro dos valores pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log('Soma de tudo: ', soma);
