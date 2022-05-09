// aula xx
// modelo
// 27.04.2022

const contador = document.querySelector('.contador');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let count = 0;

let timer;

function formataDoisDig(num) {
    return num < 10 ? '0' + num.toString() : num.toString();
}

function montaTimer() {
    let segundos = count % 60;;
    let minutos = Math.floor(count/60);
    minutos = minutos < 60 ? minutos :minutos % 60;
    let horas = Math.floor((count/60)/60)
    return `${formataDoisDig(horas)}:${formataDoisDig(minutos)}:${formataDoisDig(segundos)}`;
}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    contador.classList.remove('pausado');
    timer = setInterval(function (){
        count++;
        contador.innerHTML = montaTimer(count);
    }, 1000);
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    contador.classList.add('pausado');
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    contador.classList.remove('pausado');
    count = 0;
    contador.innerHTML = montaTimer();
})
