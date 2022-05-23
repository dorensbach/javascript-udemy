// aula 46
// factory functions
// 23.05.2022

/**
 * Funções fábrica são usadas para criar objetos
 */

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        // Getter: faz com que o método se comporte como um atributo
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter: permite settar um valor a um atributo direto na instancia do objeto
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.70, 80);
console.log(p1);
console.log(p1.fala('dormindo'));
console.log(p1.imc);

const p2 = criaPessoa('Maria', 'Joaquina', 1.65, 70);
console.log(p2);
console.log(p2.fala('correndo'));
console.log(p2.imc);

const p3 = criaPessoa('Paulo', 'Daniel', 1.71, 79);
p3.nomeCompleto = 'Fulano da Silva';
console.log(p3);
console.log(p3.fala());
