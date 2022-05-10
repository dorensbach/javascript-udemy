// aula 40
// lista de tarefas
// 09.05.2022 - 10.05.2022

const imputTarefa = document.querySelector('.imput-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    return document.createElement('li');
};

function limpaImput() {
    imputTarefa.value = '';
    imputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('classe-do-botao'); // Outra maneira de adicionar classe a um elemento
    // setAtribute: usado para setar qualquer atributo para o elemento
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaImput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

imputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!imputTarefa.value) return
        criaTarefa(imputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function() {
    if (!imputTarefa.value) return
    criaTarefa(imputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    // Printa qual elemento foi clicado
    // console.log(el);
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
});
