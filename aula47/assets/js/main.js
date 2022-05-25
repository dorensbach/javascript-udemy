// aula 47
// Calculadora - Praticando factory functions
// 24.05.2022 -

/**
 * Arrow functions não mudam o comportamento do this
 * .bind(this) = "corrige" o this em uma function chamada por outro elemento em um objeto
 */

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        clear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
