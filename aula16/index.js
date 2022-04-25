// aula 16
// math
// 25.04.2022

let num1 = 9.54769;

// Arreddonda pra baixo
let num2 = Math.floor(num1);
console.log(num2);

// Arredonda pra cima
let num3 = Math.ceil(num1);
console.log(num3);

// Arredonda para o mais próximo
let num4 = Math.round(num1);
console.log(num4);

// Maior numero da sequencia
console.log(Math.max(1,2,3,4,5,6,7,-10,-50,50,1536,-666));

// Menor numero da sequencia
console.log(Math.min(1,2,3,4,5,6,7,-10,-50,50,1536,-666));

// Numero aleatorio entre 0 e 1 (o 1 nunca sera executado)
console.log(Math.random());
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Resultado entre 5 e 10
console.log(aleatorio);

// Valor de PI
console.log(Math.PI);

// Potencialização
console.log(Math.pow(2,10));
console.log(2 ** 10);

// Raiz quadrada
let num5 = 9;
console.log(num5 ** (1/2));
console.log(num5 ** 0.5);
