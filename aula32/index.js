// aula 32
// for in
// 03.05.2022

// for in: lê os indices (chaves) do objeto
const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i in frutas) {
    console.log(i, frutas[i]);
}

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
console.log(pessoa.nome, pessoa['sobrenome']);
for (let chave in pessoa) {
    console.log(`${chave} = ${pessoa[chave]}`);
}
