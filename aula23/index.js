// aula 23
// short-circuit
// 27.04.2022

/**
 * && -> retorna o primeiro valor false que encontrar, ou, se tudo for true, retorna o ultimo true
 * || -> retorna o valor verdadeiro ou o ultimo false
 *
 * FALSY (valores avaliados em falso)
 * false
 * 0
 * '' "" ``
 * null
 * undefined
 * NaN
 */

// ==== && ====
console.log('Paulo' && 1 && 0 && 'Maria');
console.log('Paulo' && false && 0 && 'Maria');
console.log('Paulo' && 1 && NaN && 'Maria');
console.log('Paulo' && 1 && 0.6 && 'Maria');

function falaOi() {
    return 'Oi';
}

let vaiExecutar;
console.log(vaiExecutar && falaOi());

vaiExecutar = true;
console.log(vaiExecutar && falaOi());

// ==== || ====
console.log(0 || false || null || 'Paulo' || true);
console.log(0 || false || null || '' || NaN);
