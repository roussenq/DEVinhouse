/*exercício 01 
Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”,
um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado 
“calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, 
que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.
*/

function calcIdade() {
    nascimento = document.getElementById('data').value
    diaNasc = +new Date(nascimento)
    idade = ~~((Date.now() - diaNasc) / (31557600000)) //duplo ~ pega o valor inteiro.
    document.getElementById('resposta1').innerHTML = 'Sua idade é: ' + idade + ' anos!'
    return idade
}

/*Faça uma página HTML contendo 2 campos de texto (dica: input type number), para que o usuário possa inserir, em cada um, o valor que deseja calcular. Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão. Adicione um outro campo de texto, apenas leitura (readonly). Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos pelo usuário e exibir o resultado no campo de texto readonly. Programe essa interatividade utilizando JavaScript.
*/

function somar() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 + n2
}

function multiplicar() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 * n2
}

function diminuir() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 - n2
}

function dividir() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 / n2
}

/*Exercício 03
Em uma página HTML, insira um campo de texto para que o usuário insira um número. 
Programe uma função em JavaScript para verificar se o número inserido pelo usuário é par ou ímpar, 
e informe o usuário através de um texto na página HTML.*/

function verificaParOuImpar() {
    var numero = Number(document.getElementById('txtpar').value)
    if (numero % 2 ==0) {
        document.getElementById('resposta3').innerHTML = 'É Par!'
    } else {
        document.getElementById('resposta3').innerHTML = 'É Impar!'
    }
}

/*
[SP03] - Ex 4 - Faça um relógio
Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato “23:59” (HH:mm).
*/

function relogio() {
    let horas = new Date().getHours()
    let minutos = new Date().getMinutes()
    document.getElementById('horaAtual').innerHTML = "Horário: " + horas + ":" + (minutos < 10 ? '0' : '') + minutos
}

relogio()

/* [SP03] - Ex 5 - Faça um relógio que atualize automaticamente
   
Construa uma página HTML contendo um texto que informa o horário atual, no formato “23:59”, e que atualize automaticamente o valor, sempre que mudar o horário.
*/

function horaAtual2() {
    var horas = new Date().getHours()
    var minutos = new Date().getMinutes()
    document.getElementById('horaAtual2').innerHTML = "Horário: " + horas + ":" + (minutos < 10 ? '0' : '') + minutos
}

setInterval(horaAtual2, 1000)

// Exercício 6

function getEstacao() {
    mes = new Date().getMonth()
    dia = new Date().getDay()

    img_estacao = document.getElementById('img-estacao')
    estacao_atual = document.getElementById('estacao')

    if ((mes <= 3 || mes > 11)) { estacao_atual.innerHTML = "Verão"; img_estacao.setAttribute('src', 'verao.jpg') }
    if ((mes >= 3 || mes >= 6)) { estacao_atual.innerHTML = "Outono"; img_estacao.setAttribute('src', 'outono.jpg') }
    if ((mes >= 6 || mes >= 9)) { estacao_atual.innerHTML = "Inverno"; img_estacao.setAttribute('src', 'inverno.jpg') }
    if ((mes >= 9 || mes >= 12)) { estacao_atual.innerHTML = "Primavera"; img_estacao.setAttribute('src', 'primavera.jpg') }
}

getEstacao()

// Exercício 7

function addItem() {

    document.getElementById('listaForm').addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('prevented')
    })

    if (document.getElementById('novoItem').value === '') {
        alert('Preencha este campo')
    } else {
        lista = document.getElementById('listaCompras')
        opt = document.createElement('option')
        lista.appendChild(opt)
        opt.value = document.getElementById('novoItem').value
        opt.innerText = document.getElementById('novoItem').value
        document.getElementById('novoItem').value = ""
    }


}

// Exercícios 8 e 9

function addItem2() {

    document.getElementById('listaForm2').addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('prevented')
    })

    if (document.getElementById('novoItem2').value === '') {
        alert('Preencha este campo')
    } else {
        lista = document.getElementById('listaCompras2')
        opt = document.createElement('option')
        lista.appendChild(opt)
        opt.value = document.getElementById('novoItem2').value
        opt.innerText = document.getElementById('novoItem2').value
        document.getElementById('novoItem2').value = ""
    }


}

function saveStorage() {
    document.getElementById('saveLista').addEventListener('click', function (e) {
        e.preventDefault()
        store = document.getElementById('listaCompras2').innerHTML
        localStorage.setItem('Lista de Compras', store)
        console.log('gravando')
    })
}

function loadStorage() {
    document.getElementById('loadLista').addEventListener('click', (e) => {
        if (localStorage.getItem('Lista de Compras')) {
            document.getElementById('listaCompras2').innerHTML = localStorage.getItem('Lista de Compras')
            console.log('carregando')
        }

    })

}

// Exercício 10

function calcularPA() {
    var pa = document.getElementById('inputValor').value
    var pg = document.getElementById('inputRaiz').value
    document.getElementById('calcPA').addEventListener('click', (e) => {
        e.preventDefault()
        if (!pa.length || !pg.length) {
            alert('Preencha os campos!')
        } else {
            var array = []
            var valor = parseInt(document.getElementById('inputValor').value)
            array.push(valor)
            var raiz = parseInt(document.getElementById('inputRaiz').value)
            array.push(raiz)
            resultado = valor + raiz
            for (i = 0; i < 8; i++) {
                resultado = resultado + raiz
                array.push(resultado)
            }
            alert(array)
        }
    })
}

calcularPA()

function calcularPG() {
    var pa = document.getElementById('inputValor').value
    var pg = document.getElementById('inputRaiz').value
    var element = document.getElementById('calcPG')

    element.addEventListener('click', (e) => {
        e.preventDefault()
        if (!pa.length || !pg.length) {
            alert('Preencha os campos!')
        } else {
            var array = []
            var valor = parseInt(document.getElementById('inputValor').value)
            array.push(valor)
            var raiz = parseInt(document.getElementById('inputRaiz').value)
            array.push(raiz)
            resultado = valor * raiz
            for (i = 0; i < 8; i++) {
                resultado = resultado * raiz
                array.push(resultado)
            }
            alert(array)
        }
    })
}

calcularPG()