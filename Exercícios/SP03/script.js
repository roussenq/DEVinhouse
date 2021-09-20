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
    document.getElementById('resposta').innerHTML = 'Sua idade é: ' + idade + ' anos!'
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
