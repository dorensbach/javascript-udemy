// aula 42
// parametros de funcoes
// 13.05.2022 - 16.05.2022

/**
 * Funções definidas com a palavra function, tem o argumento especial Arguments com todos argumentos enviados
 */
function funcao1() {
    console.log(arguments);
    console.log(arguments[4]);
}
funcao1('Texto', 0, 12, 'casa', 'bola', true, 7);

console.log('###############################')

function funcao2(a, b, c) {
    console.log(arguments);
    console.log(arguments[6]);
}
funcao2('Texto', 0, 12, 'casa', 'bola', true, 7);

console.log('###############################')

function funcao3() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao3(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log('###############################')

function funcao4(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g);
}
funcao4(1, 2, 3);

console.log('###############################')

function funcao5(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao5(1, 10);

console.log('###############################')

/**
 * Para forçar a função a usar o valor padrão, passar o parâmetro como undefined
 */
function funcao6(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao6(1, undefined, 10);

console.log('###############################')

function funcao7({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao7({
    nome: 'Lucas',
    sobrenome: 'Silva e Silva',
    idade: '35'
});

console.log('###############################')

function funcao8([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao8(['Lucas','Silva e Silva','33']);

console.log('###############################')

// Rest operator. Precisa ser o último parâmetro da função
function funcao9(nome, sobrenome, ...numeros) {
    console.log(nome, sobrenome, numeros);
}
funcao9('Lucas','Silva e Silva', 1, 7, 15, 33, 45, 58);

console.log('###############################')
