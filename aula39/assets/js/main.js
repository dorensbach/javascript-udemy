// aula 39
// Exercicio - Criando um timer
// 06.05.2022

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let count = 58;
function aumentaTimer() {
    count++;
    segundos = count < 10 ? '0' + count : count
    minutos = segundos % 60 > 0 ? segundos % 60 : segundos;
    // minutos = '00';
    horas = '00';
    return `${horas}:${minutos}:${segundos}`;
}

iniciar.addEventListener('click', function(event) {
    timer = setInterval(function (){
        relogio.innerHTML = aumentaTimer();
    }, 1000);
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
})
