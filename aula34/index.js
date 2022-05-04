// aula 34
// while do while
// 04.05.2022

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log('**********');

i = 0;
const frutas = ['Maçã', 'Pêra', 'Uva'];
while (i < frutas.length) {
    console.log(frutas[i]);
    i++;
}

console.log('**********');

function random( min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
let contador = 1;
console.log(rand);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
    contador++;
}

console.log('**********');

let contadorDo = 0;

do {
    rand = random(min, max);
    console.log(rand);
    contadorDo++;
} while(rand !== 10);

console.log(`Executou o while ${contador} vezes.`);
console.log(`Executou o do while ${contadorDo} vezes.`);
