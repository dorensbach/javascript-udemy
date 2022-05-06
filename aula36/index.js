// aula 36
// try, catch, throw
// 06.05.2022

try {
    console.log(naoExisto);
} catch(err) {
    console.log('A var não existe');
    console.log('===== ERRO =====');
    console.log(err);
    console.log('=== FIM ERRO ===');

}

//**********************//

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch(error) {
    console.log(error);
}
