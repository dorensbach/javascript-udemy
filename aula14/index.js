// aula 14
// strings
// 24.04.2022

// Escape de caracteres
let umaString = "Um \"texto\" \\";
console.log(umaString);

umaString = "Um texto"
console.log(umaString[3]);
console.log(umaString[12]); // Ao tentar buscar um item fora do range, retorna undefined

// Concatenação
console.log(umaString.charAt(5));
console.log(umaString.concat(' concatenado com espaços.', ' Fim!'));
console.log(umaString + ' concatenado com espaços.' + ' Fim!');
console.log(`${umaString} concatenado com espaços. Fim!`);
console.log(umaString);

// Retorna a posição de parte da string
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Texto')); // Retorna -1 quando nẽo encontra.
console.log(umaString.indexOf('o', 3)); // Começa a procurar a partir do 3
console.log(umaString.indexOf('Um', 3)); // Não encontra, pois esta antes da posição 3

console.log(umaString.lastIndexOf('o')); // Começa a buscar de tras pra frente
console.log(umaString.lastIndexOf('o', 3));
console.log(umaString.lastIndexOf('Um', 3));

// Expressões regulates
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minusculas
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/)); // search retorna o indice

// Substiruição
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.replace(/Um/, 'Outro'));
console.log(umaString);
let ratoString = "O rato roeu a roupa do rei de Roma.";
console.log(ratoString.replace(/r/, '#'));
console.log(ratoString.replace(/r/g, '#'));

// Tamanho da string
console.log(ratoString.length);

// Substring
console.log(ratoString.slice(2, 6));
console.log(ratoString.slice(30));
console.log(ratoString.slice(-5)); // Negativo desconta do length da string e começa naquela posição
console.log(ratoString.slice(-5, -1));

console.log(ratoString.substring(ratoString.length -5));
console.log(ratoString.substring(ratoString.length -5, ratoString.length -1));

// Dividir a string
console.log(ratoString.split(' '));
console.log(ratoString.split('r'));
console.log(ratoString.split(' ', 2));

// Capitalização
console.log(ratoString.toUpperCase());
console.log(ratoString.toLowerCase());

console.log(umaString);
console.log(ratoString);
