// aula 20
// valores primitivos e valores por referencia
// 26.04.2022

/**
 * Primitivos (valores imutaveis):
 * string, number, boolean, indefined, null, bigint, symbol
 */

let nome = 'Luiz';
console.log(nome[0]);
nome[0] = 'R'; // Não faz a substituição, pois é imutavel
console.log(nome[0]);

let a = 'A';
let b = a; // Faz uma cópia independente
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

/**
 * Referência (valores mutáveis):
 * array, object, function
 */

// Uma atribuição com valores de referência não faz a cópia, faz uma referência pro mesmo valor da memória
let a2 = [1, 2, 3];
let b2 = a2;
let c2 = b2;
console.log(a2, b2);
a2.push(4);
b2.push(5);
console.log(a2, b2);
b2.pop();
console.log(a2, b2);
a2.push('Bola');
console.log(c2);

// Copiando um valor por referência.
let d2 = [...a2];
d2.pop();
console.log(a2, d2);

// Objeto: mesma regra
const ao = {
    nome: 'Luiz',
    sobrenome: 'da Silva'
};
const bo = ao;
console.log(ao, bo);
ao.nome = 'João';
console.log(ao, bo);

// Fazendo a cópia
const co = {...ao};
ao.nome = 'Paulo';
console.log(ao, bo, co);
