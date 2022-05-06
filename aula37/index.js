// aula 37
// try, catch, finally
// 06.05.2022

/**
 * try: É executado quando não há erros
 * catch: É executado quando há erros
 * finally: Sempre é executado. Pode ser omitido
 */

try {
    console.log('Abri um arquivo');
    console.log(a);
    console.log('Manipulei o arquivo e gerou erro');
} catch(err) {
    console.log('Tratando o erro');
} finally {
    console.log('Eu sempre sou executado');
    console.log('Fechei o arquivo');
}

//**********************//
