// aula xx
// modelo
// 27.04.2022

const contador = document.querySelector('.contador');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const icone = document.querySelector('.icone');

let count = 0;

let timer;

function formataDoisDig(num) {
    return num < 10 ? '0' + num.toString() : num.toString();
}

function montaTimer(count) {
    let segundos = count % 60;;
    let minutos = Math.floor(count/60);
    minutos = minutos < 60 ? minutos :minutos % 60;
    let horas = Math.floor((count/60)/60)
    return `${formataDoisDig(horas)}:${formataDoisDig(minutos)}:${formataDoisDig(segundos)}`;
}

function setaIcone(count) {
    if (count < 300) return '<img src="./assets/img/face-laugh-beam.svg">';
    if (count < 600) return '<img src="./assets/img/face-frown.svg">';
    if (count < 750) return '<img src="./assets/img/face-sad-tear.svg">';
    if (count < 900) return '<img src="./assets/img/face-sad-cry.svg">';
    if (count >= 900) return '<img src="./assets/img/face-angry.svg">';

}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    contador.classList.remove('pausado');
    timer = setInterval(function (){
        count++;
        contador.innerHTML = montaTimer(count);
        icone.innerHTML = setaIcone(count);
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
    contador.innerHTML = montaTimer(count);
    icone.innerHTML = setaIcone(count);
})
