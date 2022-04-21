// aula 08
// template strings
// 21.04.2022

const nome = 'Paulo';
const sobrenome = 'da Silva';
const idade = 25;
const peso = 79;
const alturaEmM = 1.7;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso/(alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
// Template strings
console.log(`tem ${alturaEmM} de altura e sem IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
