// aula 47
// Calculadora - Praticando factory functions
// 24.05.2022 - 13.06.2024

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        clear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                // Não se deve usar eval, mas para fins didáticos, está sendo usado
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        cliqueBotoes() {
            /**
             * Arrow functions não mudam o comportamento do this,
             * se usar function(){}, o this vai se referir ao document
             * .bind(this) = "corrige" o this em uma function chamada por outro elemento em um objeto
             * o .bind vai no final da function
             */
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
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
