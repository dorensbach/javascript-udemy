// aula 40
// lista de tarefas
// 09.05.2022

const imputTarefa = document.querySelector('.imput-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    return document.createElement('li');
};

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
}

imputTarefa.addEventListener('keypress', function(e) {
    console.log(e);
});

btnTarefa.addEventListener('click', function() {
    if (!imputTarefa.value) return
    criaTarefa(imputTarefa.value);
});
