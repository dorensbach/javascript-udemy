// aula 45
// funcoes imediatas (IIFE)
// IIFE = Immediately invoked function expression
// 23.05.2022

// Função "auto-invocada" anônima. Não toca o escopo global.
(function() {
    const nome = 'Luiz';
    console.log(nome);
})();

const nome = 'Pedro';
console.log(nome);

// Pode receber parametros
(function(idade, peso, altura) {
    const sobrenome = 'Miranda';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
