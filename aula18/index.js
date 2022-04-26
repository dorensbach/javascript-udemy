// aula 18
// funcoes
// 26.04.2022

// 1 - Declaração clássica de funções
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

function saudacao2(nome) {
    return `Bom dia ${nome}!`; // Return encerra a execução da função
}

saudacao('Paulo');
saudacao('Anakin');
const retorno = saudacao('Ana');
console.log(retorno);

const retorno2 = saudacao2('Saudação 2');
console.log(retorno2);

function soma(x, y) {
    const resultado = x+y;
    return resultado;
}
console.log(soma(2,7));
console.log(soma(8,12));
const resultado = soma(1, 5);
console.log(resultado);

let result = soma('Paulo ', 'Daniel');
console.log(result);

function soma2(x = 0, y = 0) {
    const resultado = x+y;
    return resultado;
}
console.log(soma2(2,7));
console.log(soma2());
console.log(soma2(1));

// 2 - Declarar função como variavel
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

// 3 - Arrow function
const raiz2 = (n) => {
    return n ** 0.5;
};
console.log(raiz2(25));

// 3.1 - Arrow function de uma linha
const raiz3 = n => n ** 0.5;
console.log(raiz2(36));
