// aula 42
// parametros de funcoes
// 13.05.2022

/**
 * Funções definidas com a palavra function, tem o argumento especial Arguments com todos argumentos enviados
 */
function funcao1() {
    console.log(arguments);
    console.log(arguments[4]);
}
funcao1('Texto', 0, 12, 'casa', 'bola', true, 7);

function funcao2(a, b, c) {
    console.log(arguments);
    console.log(arguments[6]);
}
funcao2('Texto', 0, 12, 'casa', 'bola', true, 7);

function funcao3() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao3(1, 2, 3, 4, 5, 6, 7, 8, 9);