/**
 * Aula 51
 * Função geradora
 * 17.06.2024
 *
 * Return interrompe a função geradora
 */

console.log('Geradora 1');
function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

const g1a = geradora1();
console.log(g1a.next());
console.log(g1a.next().value);
console.log(g1a.next());
console.log(g1a.next());

const g1b = geradora1();
for (let valor of g1b) {
    console.log(valor);
}

console.log('Geradora 2');
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('Geradora 3 e 4');
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

console.log('Geradora 5');
function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }

    // Código qualquer ...

    yield function() {
        console.log('Vim do y2');
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
