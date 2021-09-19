/*exercício 01 
Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”,
um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado 
“calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, 
que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.
*/

    function calcIdade(){
    nascimento = document.getElementById('data').value
    diaNasc = +new Date(nascimento)
    idade = ~~((Date.now() - diaNasc) / (31557600000)) //duplo ~ pega o valor inteiro.
    document.getElementById('resposta').innerHTML = 'Sua idade é: ' + idade + ' anos!'
    return idade
}

