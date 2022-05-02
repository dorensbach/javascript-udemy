// aula 30
// desestruturacao objetos
// 02.05.2022

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    },
    // pontos: 15
    chaveRenomeada: 'Valor qualquer'
};
console.log(pessoa);

// Método padrão de consultar um atributo
const nomeP = pessoa.nome;
console.log(nomeP);

// A var precisa ter o mesmo nome do atributo (chave) do objeto
const {nomePe} = pessoa;
console.log(nomePe);

// Para dar um nome diferente do da chave:
const {chaveRenomeada: outroNome} = pessoa;
console.log(outroNome);

// Atribuição via desestruturação
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);

// Pode-se pegar apenas um atributo de qualquer posição
const {idade} = pessoa;
console.log(idade);

// Atributo com valor default
const {pontos = 10} = pessoa;
console.log(pontos);

const {endereco} = pessoa
console.log(endereco);

// Atributos de um objeto dentro do objeto
const {endereco: {rua, numero: num = 'S/N'}, endereco: enderecoCompleto} = pessoa;
console.log(rua, num);
console.log(enderecoCompleto);

// Rest operator
const {nome: nome2, ...resto} = pessoa;
console.log(nome2);
console.log(resto);
