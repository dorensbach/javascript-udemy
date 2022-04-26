// aula 17
// arrays
// 25.04.2022

const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[1]);

alunos[0] = 'Eduardo';
console.log(alunos);

alunos[3] = 'Luiz';
console.log(alunos);

// Tamanho do array
console.log(alunos.length);

alunos[alunos.length] = 'Luiza';
console.log(alunos);

// Adiciona um elemento no final
alunos.push('Fabio');
alunos.push('Carlos');
console.log(alunos);

// Adiciona um elemento no inicio. Posição 0 e reorganiza o array.
alunos.unshift('Paulo');
console.log(alunos);

// Remover o elemento do final do array
alunos.pop();
console.log(alunos);
// Guardando o removido
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Remove do começo
const removido2 = alunos.shift();
console.log(removido2);
console.log(alunos);

// Remover sem alterar os indices (aparece como "empty item")
delete alunos[1];
console.log(alunos);

// Acessar indice que não existe
console.log(alunos[13]);

// Fatiar array
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));

// O tipo retorna com objeto, e não array
console.log(typeof alunos);

// Para testar se é um array
console.log(alunos instanceof Array);
