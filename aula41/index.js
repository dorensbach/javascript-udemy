// aula 41
// declaracao de funcoes
// 12.05.2022

/**
 * Funções são objetos de primeira classe (First-class objects)
 */

/**
 * Function hoisting: O motos do javascript move a declaração de funções para o topo do arquivo
 * Por isso a função pode ser usada acima da declaração.
 * Funciona apenas quando se declara com o nome function
 */
falaOi();

function falaOi() {
    console.log('Oi!');
};

/**
 * Podem ser tratadas como dado, Function expression
 */
const souUmDado = function() {
    console.log('Sou um dado.');
}

souUmDado();

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

/**
 * Arrow function
 * É uma function express mais curta
 */
const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
}
funcaoArrow();

/**
 * Dentro de um objeto. Função = método
 */
const obj = {
    // Maneira classica de declarar funcao dentro de objeto
    falar: function() {
        console.log('Estou falando...');
    },
    falar2() {
        console.log('Também sei falar!');
    }
};
obj.falar();
obj.falar2();
