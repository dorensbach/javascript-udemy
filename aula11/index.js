// aula 11
// operadores
// 21.04.2022

let contador = 1;
console.log(contador);
contador++;
console.log(contador);
++contador;
console.log(contador);
contador--;
console.log(contador);
console.log(contador++);
console.log(++contador);
console.log(contador--);
console.log(--contador);
console.log(contador);

passo = 2;
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador *= 10;
console.log(contador);
contador /= 6;
console.log(contador);
contador -= passo;
console.log(contador);

const numstr = '5';
const num2 = 10;
console.log(typeof(numstr), typeof(num2));
const num1 = parseInt(numstr); // Converte para inteiro
console.log(typeof(numstr), typeof(num2), typeof(num1));
num3 = parseFloat('5.2'); // Converte para float
console.log(typeof(num3));

num4 = Number('5.2'); //Converte para número
num5 = Number('10');
console.log(typeof(num4), typeof(num5));
console.log(num4 + num5);

numstr2 = Number('n5');
console.log(numstr2); // NaN = Not a Number
