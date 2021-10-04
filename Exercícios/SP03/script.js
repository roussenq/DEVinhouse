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

/* 
[SP03] - Ex 6 - Informe a estação do ano no dia de acesso

Sua página deve conter um texto e uma imagem, ambos representando a estação. Ao carregar a página, baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, e deve alterar o texto e a imagem, para que passem a representar a estação correta. Considere: 22/12 a 21/03 - Verão; 22/03 a 21/06 - Outono; 22/06 a 21/09 - Inverno; 22/09 a 21/12 - Primavera.
*/


function getEstacao() {
    var mes = new Date().getMonth()
    var dia = new Date().getDay()

    img_estacao = document.getElementById('img-estacao')
    estacao_atual = document.getElementById('estacao')

    if ((mes <= 3 || mes > 11)) { estacao_atual.innerHTML = "Verão"; img_estacao.setAttribute('src', 'verao.jpg') }
    if ((mes >= 3 || mes >= 6)) { estacao_atual.innerHTML = "Outono"; img_estacao.setAttribute('src', 'outono.jpg') }
    if ((mes >= 6 || mes >= 9)) { estacao_atual.innerHTML = "Inverno"; img_estacao.setAttribute('src', 'inverno.jpg') }
    if ((mes >= 9 || mes >= 12)) { estacao_atual.innerHTML = "Primavera"; img_estacao.setAttribute('src', 'primavera.jpg') }
}

getEstacao()

/*
[SP03] - Ex 7 - Faça uma página de “lista de mercado”
Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada a medida que forem sendo adicionados novos itens. A página deve conter um rótulo (<label>) “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto. A página também deve conter uma lista (<select>), que exibirá os itens adicionados pelo usuário.*/

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

/*
[SP03] - Ex 8 - Salve a lista de mercado
Utilizando a mesma página do exercício anterior, adicione um novo botão “Salvar lista”. Quando o usuário clicar nesse botão, a lista de itens de mercado deve ser salva no Local Storage do navegador.

[SP03] - Ex 9 - Carregue uma lista salva anteriormente
Utilizando a mesma página dos 2 exercícios anteriores ( [SP03] - Ex 7 e [SP03] - Ex 8 ), crie um novo botão “Carregar lista”, que ao ser clicado deve buscar no Local Storage se existe uma lista de itens de mercado salva, e em caso positivo deve mostrar os itens no elemento da página. Caso não haja nenhuma lista previamente salva, deve informar o usuário “Não há itens salvos”.
*/

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

/*
[SP03] - Ex 10 - Construa uma “calculadora” de P.A. e P.G

Na página HTML devem existir 2 campos de texto (dica: input type number): um rotulado (label) “valor inicial”, e outro rotulado “raíz”. Também deve ter 2 botões: um rotulado “Calcular P.A.” e outro rotulado “Calcular P.G.”. O evento click de cada botão deve chamar uma função que: verifica se os campos estão preenchidos (dica: length) e, se estiverem vazios, deve mostrar uma mensagem ao usuário pedindo para inserir os valores; caso os campos estejam preenchidos, deve calcular os 10 primeiros valores da sequência e exibir na tela. Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. P.G. (Progressão Geométrica) é como uma P.A., mas em vez de somar, multiplica-se a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.G. = 1, 3, 9, 27, 81...
*/

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