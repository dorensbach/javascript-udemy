// aula 27
// switch case
// 29.04.2022

/**
 *
 * switch (var) {
 *  case 0:
 *      code;
 *      break;
 *  case 1:
 *      code;
 *      break;
 *  default:
 *      code;
 *      break;
 * }
 */

function getDiaDaSemana(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; // Se não tiver return, usar break;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto
    };
}

const data = new Date ('1985-05-21 00:00:00');
const diaSemana = data.getDay();
console.log(diaSemana);

const diaSemanaTexto = getDiaDaSemana(diaSemana);
console.log(diaSemanaTexto);
