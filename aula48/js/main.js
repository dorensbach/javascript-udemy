// aula 48
// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Inicia com letra maiúscula
// Fabrica -> Inicia com letra minúscula

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados, não se usa o this
    const ID = 123456;

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.apresentar = function() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
console.log(p1);
console.log(p1.nome);
console.log(typeof p1);
console.log(p1.apresentar());

const p2 = new Pessoa('Maria', 'Joaquina');
console.log(p2);
