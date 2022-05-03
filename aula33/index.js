// aula 33
// for of e forEach
// 03.05.2022

// for of: lê os valores do objeto iterável: string, array
// Objetos não são iteráveis, por isso o for of não funciona neles

const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let nome of frutas) {
    console.log(nome);
}

console.log('**********');

frutas.forEach(function(el) {
    console.log(el);
})

console.log('**********');

frutas.forEach(function(indice, valor, arrayCompleto) {
    console.log(valor, indice, arrayCompleto);
})
console.log('**********');
