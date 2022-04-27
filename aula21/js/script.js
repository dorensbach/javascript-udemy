// aula 21
// exercicios com funcoes, arrays e objetos
// 26.04.2022

// Será trabalhado numa função, para não poluir o escopo global com variaveis etc.
// Assim também as variaveis ficam protegidas de conflito
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /**
     * Forma de prevenir o evento onsubmit do form
     *
     * form.onsubmit = function(evento) {
     *    evento.preventDefault();
     * };
     *
     * Forma mais moderna de fazer esta prevenção
     *
     * form.addEventListener('submit', recebeEventoForm);
     */

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} Peso: ${peso.value}Kg Altura: ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
