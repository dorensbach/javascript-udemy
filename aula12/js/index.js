// aula 12
// alert, confirm e prompt
// 21.04.2022

alert('Nossa mensagem!');
// alert é um atalho para window.alert()
window.alert('Mensagem window.alert');

window.confirm('Deseja apagar?'); //Retorna true (botão Cancelar) ou false (botão OK)

window.prompt('Digite o seu nome');

const confirma = confirm('Apagar mesmo?');
alert(confirma);

let num1 = prompt('Digite um número');
alert(num1);
