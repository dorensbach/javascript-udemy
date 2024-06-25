/**
 * Aula 57
 * Arrays - reduce
 * 24.06.2024
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somar todos os números do array
const soma = numeros.reduce((acumulador, valor, indice, array) => {
    console.log(indice, 'acumulador', acumulador);
    acumulador += valor;
    return acumulador;
}, 0);
console.log('Soma: ', soma);

// Retorna um array com os pares (apenas para fins didaticos, filter é mais indicado)
const pares = numeros.reduce((acumulador, valor) =>{
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log('Pares: ', pares);

// Retorna um array com o dobro dos valores (apenaspara fins didaticos, usar map para isso)
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log('Dobro: ', dobro);

// Retornar a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 65 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Paulo', idade: 42 },
];
const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade >= valor.idade) return acumulador;
    return valor;
});
console.log('Mais velha: ', pessoaMaisVelha.nome);
