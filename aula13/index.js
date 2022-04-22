// aula 13
// exercicio com variaveis
// 21.04.2022

let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC);

/**
 * Trocar o valor das variaveis.
 * varA deve receber B
 * varB deve recever C
 * varC deve receber A
 */
let varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;
console.log(varA, varB, varC);

// Maneira mais moderna de resolver
let var1 = '1';
let var2 = '2';
let var3 = '3';
console.log(var1, var2, var3);

[var1, var2, var3] = [var2, var3, var1];
console.log(var1, var2, var3);
