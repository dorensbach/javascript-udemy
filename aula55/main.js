/**
 * Aula 55
 * Arrays - filter
 * 18.06.2024
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
    console.log(valor, indice);
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log('numerosFiltrados:', numerosFiltrados);

const numerosFiltrados2 = numeros.filter(function(valor) {
    return valor > 10;
});
console.log('numerosFiltrados2:', numerosFiltrados2);

const numerosFiltrados3 = numeros.filter((valor) => {
    return valor > 10;
});
console.log('numerosFiltrados3:', numerosFiltrados3);

const numerosFiltrados4 = numeros.filter(valor => valor > 10);
console.log('numerosFiltrados4:', numerosFiltrados4);


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasNomeMaior5 = pessoas.filter(pessoa => pessoa.nome.length > 5);
console.log('pessoasNomeMaior5:', pessoasNomeMaior5);

const pessoasIdadeMaior50 = pessoas.filter(pessoa => pessoa.idade > 50);
console.log('pessoasIdadeMaior50:', pessoasIdadeMaior50);

const pessoasNomeTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log('pessoasNomeTerminaComA:', pessoasNomeTerminaComA);

