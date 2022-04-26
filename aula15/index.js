// aula 15
// numbers
// 24.04.2022

let num1 = 1;
let num2 = 2.5;
let num3 = 13;
let num4 = 10.7896582456;
console.log(num1 + num2);

// Converte para string
console.log(num1.toString() + num2);
console.log(typeof num1);
numStr = num1.toString();
console.log(typeof numStr);
console.log(num3.toString(2)); // Representação binária do numero

// Arredondar
console.log(num4);
console.log(num4.toFixed(2));

// Verifica se é inteiro
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
// Verifica se é um NaN
let temp = num1 * 'Ola';
console.log(temp);
console.log(Number.isNaN(temp));
console.log(Number.isNaN(num1));

// Padrão de precisão que o Javascript segue: IEEE 754-2008
let num5 = 0.7;
let num6 = 0.1;
console.log(num5 + num6);
num5 += num6; // 0.8
console.log(num5);
num5 += num6; // 0.9
num5 += num6; // 1.0
console.log(num5);
num7 = num5.toFixed(1);
console.log(num7);
console.log(Number.isInteger(num7));
num8 = parseFloat(num5.toFixed(1)); // No lugar de parseFloat, pode utilizar Number
console.log(num8);
console.log(Number.isInteger(num8));
// Corrigindo a impresição com calculos
num5 = 0.7;
num6 = 0.1;
num9 = ((num5 * 100) + (num6 * 100)) / 100;
console.log(num9);

// Divisão por 0
console.log(100 / 0); // Retorna infinito
