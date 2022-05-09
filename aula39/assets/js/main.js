// aula 39
// Exercicio - Criando um timer
// 06.05.2022

const relogio = document.querySelector('.relogio');
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
    relogio.classList.remove('pausado');
    timer = setInterval(function (){
        count++;
        relogio.innerHTML = montaTimer(count);
    }, 1000);
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    count = 0;
    relogio.innerHTML = montaTimer();
})


/**
 * SOLUÇÃO DO PROFESSOR
 */

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
const relogio2 = document.querySelector('.relogio2');
const iniciar2 = document.querySelector('.iniciar2');
const pausar2 = document.querySelector('.pausar2');
const zerar2 = document.querySelector('.zerar2');
let segundos = 0;
let timer2;

function iniciaRelogio() {
        timer2 = setInterval(function (){
        segundos++;
        relogio2.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar2.addEventListener('click', function(event) {
    relogio2.classList.remove('pausado');
    clearInterval(timer2);
    iniciaRelogio();
});

pausar2.addEventListener('click', function(event) {
    relogio2.classList.add('pausado');
    clearInterval(timer2);
})

zerar2.addEventListener('click', function (event) {
    relogio2.classList.remove('pausado');
    clearInterval(timer2);
    count = 0;
    relogio2.innerHTML = "00:00:00";
    segundos = 0;
})
