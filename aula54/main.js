/**
 * Aula 54
 * Arrays - concat
 * 17.06.2024
 */

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log('Concat:', a3);

const a4 = a1.concat(a2, [7, 8, 9], 'Paulo');
console.log('Concat:', a4);

const a5 = [...a1, ...a2, 7, 8, 'Melkor'];
console.log('Spread:', a5);
