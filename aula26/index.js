// aula 26
// objeto date
// 28.04.2022

/**
 * Date é uma função construtora.
 * Para chamar funções contrutoras, usa-se o new
 *
 * Data 0 = 01/01/1970 = Timestamp UNIX
 * (por conta do timezone, vai dar uma diferença de horas)
 * Para pegar datas anteriores, usar numero negativo
 */
const data = new Date();
console.log(data.toString());

const dataZero = new Date(0); // 01/01/1970 = Timestamp UNIX
console.log(dataZero.toString());

const tresHoras = 60 * 60 * 3 * 1000;
const dataTresHoras = new Date(tresHoras);
console.log(dataTresHoras.toString());

const umDia = 60 * 60 * 24 * 1000;
const dataUmDia = new Date(tresHoras + umDia);
console.log(dataUmDia.toString());

const data1 = new Date(2022, 3, 28, 12, 38, 33, 500);
console.log(data1.toString());

// Passando 60 seg, soma 1 min
const data2 = new Date(2022, 3, 28, 12, 38, 60);
console.log(data2.toString());

// Omitindo um campo
const data3 = new Date(2022, 3, 28, 12, 38);
console.log(data3.toString());
const data4 = new Date(2022, 3); // Pode omitir até o dia. Quando passa apenas 1 parametro, é tratado como milisegundos
console.log(data4.toString());
const data5 = new Date(2022, 0); // Janeiro é 0
console.log(data5.toString());

// Data como STRING
const dataS1 = new Date('2022-05-12 20:11:36');
console.log(dataS1.toString());
const dataS2 = new Date('2022-05-12T20:11:36.256');
console.log(dataS2.toString());

// Pegar partes da data
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()); // Começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 = domingo, 6 = sábado

// Obter os ms de agora
console.log(Date.now());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil);
