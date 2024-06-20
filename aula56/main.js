/**
 * Aula 56
 * Arrays - map
 * 19.06.2024
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log('numeros', numeros);
console.log('numerosEmDobro', numerosEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log('Pessoas', pessoas);
console.log('Nomes', nomes);

const idadesDelete = pessoas.map(pessoa => ({ idade: pessoa.idade }));
console.log('Idades Delete', idadesDelete);

const comIds = pessoas.map((pessoa, indice) => {
    const novoObjeto = { id: indice + 1, ...pessoa };
    return novoObjeto;
});
console.log('Com IDs', comIds);
