/* Você está participando de um processo seletivo para ingressar em uma vaga de programador 
    em uma grande empresa de TI. Uma das etapas do processo envolve a criação de uma aplicação 
    web de lista de afazeres (“to-do list”).

A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:

HTML + CSS
Um título na aba do navegador, para que o usuário encontre a sua aplicação no meio das várias abas que constantemente mantém abertas.
Um cabeçalho dentro da página, para que o usuário saiba facilmente em que página se encontra e do que se trata o conteúdo.
Um campo de texto para digitar o nome de uma nova atividade a ser adicionada à lista.
Um botão para adicionar uma nova atividade à lista.

JS
Uma lista contendo as atividades já inseridas.
Cada linha da lista deve conter: checkbox para o usuário marcar que aquela atividade já foi realizada; o texto que o usuário digitou ao cadastrar a atividade;
botão para excluir a atividade da lista, caso desejado.
Quando o usuário marcar uma tarefa como realizada, o texto daquela linha deve ser tachado (line-through).
A lista deve ser salva no "localStorage" do navegador (incluindo quais itens já foram realizados), e deve ser carregada sempre que a página for reaberta.
*/

var contador = 0

// Seletores dos elementos
var inputTask = document.getElementById('input') // Seleciona o input de tarefas
var tasksDiv = document.getElementById('todo-div') // Seleciona a DIV de tarefas
var buttonAddTask = document.getElementById('btn-adicionar') // Seleciona o botão "Adicionar"
var excludeButton = document.getElementById('exclude-btn') // Seleciona o botão "X" na DIV de tarefas
var selectCheckbox = document.querySelector('input[type="checkbox"') // Seleciona o checkbox
var selectTask = document.querySelector('span') // seleciona uma tarefa

// Listener do botão "Adicionar"
buttonAddTask.addEventListener('click', function (e) {
    if (inputTask.value) { // valida se o campo está preenchido
        addTask()
        saveStorage()
    }

    inputTask.value = '' // Limpa o campo após inserir uma tarefa
})

// Listener do input ao apertar a tecla "Enter"
inputTask.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        if (inputTask.value) { // valida se o campo está preenchido
            addTask()
            saveStorage()
        }
        inputTask.value = '' // Limpa o campo após inserir uma tarefa
    }
})

// ADICIONA UMA TAREFA
function addTask() {
    // Varíavel que recebe o texto do input
    texto = document.getElementById('input').value
    // Divs
    var rowDiv = document.createElement('div')
    tasksDiv.appendChild(rowDiv)
    var checkboxDiv = document.createElement('div')
    var taskDiv = document.createElement('div')
    var excludeDiv = document.createElement('div')
    // Atributos
    rowDiv.setAttribute('class', 'row container-fluid')
    rowDiv.setAttribute('id', contador)
    checkboxDiv.setAttribute('class', 'col-1')
    taskDiv.setAttribute('class', 'col-10')
    taskDiv.setAttribute('name', 'task' + contador)
    excludeDiv.setAttribute('class', 'col-1')
    // Elements
    var inputElement = document.createElement('input')
    var taskElement = document.createTextNode(inputTask.value)
    var excludeElement = document.createElement('button')
    var excludeButtonValue = document.createTextNode("X")
    // Atributos dos elementos
    inputElement.setAttribute('type', 'checkbox')
    inputElement.setAttribute('name', contador)
    inputElement.setAttribute('onchange', 'toggleCompleted(this)')
    excludeElement.setAttribute('class', 'btn btn-sm')
    excludeElement.setAttribute('onclick', 'removeTask(this)')
    excludeElement.setAttribute('name', contador)

    // Adiciona os elementos
    rowDiv.appendChild(checkboxDiv)
    rowDiv.appendChild(taskDiv)
    rowDiv.appendChild(excludeDiv)
    checkboxDiv.appendChild(inputElement)
    excludeDiv.appendChild(excludeElement)
    taskDiv.appendChild(taskElement)
    excludeElement.appendChild(excludeButtonValue)
    contador++
}

// Remove uma tarefa
function removeTask(e) {
    element = document.getElementById(e.name)
    if (confirm('Tem certeza que deseja excluir este item?')) {
        if (element.id === e.name) {
            element.remove()
            saveStorage()
        }
    }

}

// Adiciona tarefa como concluída
function toggleCompleted(e) {
    if (e.checked) {
        element = document.querySelector("[name='task" + CSS.escape(e.name) + "']")
        if (element) {
            // risca o texto
            element.style.cssText = 'text-decoration: line-through;'
            e.setAttribute('checked', 'true')
            saveStorage()
        }
    } else {
        element = document.querySelector("[name='task" + CSS.escape(e.name) + "']")
        if (element) {
            // retira o risco do texto
            element.style.cssText = 'text-decoration: normal;'
            e.removeAttribute('checked')
            saveStorage()
        }
    }

}

// Carrega o LocalStorage
if (localStorage.getItem("tasks")) {
    loaded = localStorage.getItem("tasks")
    document.getElementById('todo-div').innerHTML = loaded
}

// Grava as tarefas no LocalStorage
function saveStorage() {
    stored = document.getElementById('todo-div').innerHTML
    localStorage.setItem("tasks", stored)
}

// Maxlength do Input (JQuery)
$("input").attr("maxlength", 30)

