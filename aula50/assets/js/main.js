/**
 * Aula 50
 * Função recursiva
 * 17.06.2024
 */

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(-5);
