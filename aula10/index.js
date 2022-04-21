// aula 10
// tipos de dados primitivos
// 21.04.2022

const nome = 'Luiz'; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined -> Não aponta para local nenhum dad memória
const sobrenomeAluno = null; //nullo -> Não aponta para local nenhum dad memória
const aprovado = true; //boolean

console.log(typeof nome, nome);

let na = 2;
let nb = na;
console.log(na, nb);
na = 3;
console.log(na, nb);


// Tipo não primitivo, será visto em outra aula:
const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);
