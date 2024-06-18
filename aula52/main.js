/**
 * Aula 52
 * Arrays - Revisão
 * 17.06.2024
 */

// array literal
console.log('Array literal');
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
console.log(nomes);
delete nomes[2];
console.log(nomes);

// construtor de array
console.log('Construtor de array');
const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
console.log(nomes2);

const novo = nomes2;
novo.pop();
console.log('nomes2', nomes2);
console.log('novo', novo);

// spread operator
const novo2 = [...nomes];
novo2.pop();
console.log('nomes', nomes);
console.log('novo2', novo2);

console.log('Tamanho:', nomes2.length);

const removido = nomes2.pop();
console.log('Removido:', removido);
console.log('Nomes2:', nomes2);

const removidoInicio = nomes.shift();
console.log('Removido do início:', removidoInicio);
console.log('Nomes:', nomes);

nomes.push('Wallace');
console.log('Nomes:', nomes);
nomes.unshift('Ana');
console.log('Nomes:', nomes);

const nomes3 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Ana'];
const novo3a = nomes3.slice(1, 3);
console.log('Slice:', novo3a);
const novo3b = nomes3.slice(1, -1);
console.log('Slice:', novo3b);

const nomeSplit = 'Paulo Cassio Joana Carol';
const nomesSplit = nomeSplit.split(' ');
console.log('Split:', nomesSplit);

const nomesJoin = nomes3.join(' ');
console.log('Join:', nomesJoin);
