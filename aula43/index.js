// aula 43
// retorno de funcoes
// 16.05.2022

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

// As const abaixo recebem functions
// São chamadas de functions closures
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
