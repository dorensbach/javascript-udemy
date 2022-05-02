// aula 29
// desestruturacao arrays
// 01.05.2022

let a = 'A'; //receber: 'B'
let b = 'B'; //receber: 'C'
let c = 'C'; //receber: 'A'
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros; // ...resto = rest operator
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

const numerosSubArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [,[,,seis]] = numerosSubArray;
console.log(seis);
