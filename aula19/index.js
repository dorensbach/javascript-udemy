// aula 19
// objetos
// 26.04.2022

// Objeto literal
const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'da Silva',
    idade: 21,

    fala() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}.`)
    },

    incrementaIdade() {
        this.idade++;
    },

    falaIdade() {
        console.log(`Minha idade atual é ${this.idade}.`);
    }
};
console.log(pessoa1.nome);
pessoa1.fala();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();

// É chamada de function factory
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa01 = criaPessoa('Luiz', 'Otavio', 56);
console.log(pessoa01.nome, pessoa01.sobrenome, '. Idade:', pessoa01.idade);

// O javascript gerencia quando os atributos e parametros tem mesmo nome
function criaPessoa2(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa101 = criaPessoa2('Carlos', 'Otavio', 25);
console.log(pessoa101.nome);

// Diminuindo tamanho da função
function criaPessoa3(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa201 = criaPessoa3('Julio', 'Costa', 25);
console.log(pessoa201.nome);
