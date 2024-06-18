/**
 * Aula 53
 * Arrays - splice
 * 17.06.2024
 */

// Remoção
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log('Original:', nomes);
const removidos = nomes.splice(2, 2);
console.log('Nomes:', nomes);
console.log('Removidos:', removidos);

// Negativos começam do final
const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log('Original:', nomes2);
const removidos2 = nomes.splice(-2, 2);
console.log('Nomes:', nomes2);
console.log('Removidos:', removidos2);

// Adição
const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log('Original:', nomes3);
nomes3.splice(2, 0, 'Barbara');
console.log('Nomes:', nomes3);
nomes3.splice(nomes3.length, 0, 'Luiz', 'Otávio');
console.log('Nomes:', nomes3);

// Substituição
const nomes4 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log('Original:', nomes4);
const removidos4 = nomes4.splice(3, 1, 'Luiz');
console.log('Removidos:', removidos4);
console.log('Nomes:', nomes4);
