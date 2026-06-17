let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

function verificaConsole(){
    console.log('O botão foi clicado')
}

function verificaAlerta(){
    window.alert("Eu amo JS")
}

function verificaPrompt(){
    let cidade = window.prompt("Diga uma cidade brasileira")
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function verificaSoma(){
    let n1 = Number(prompt('Digite um número'))
    let n2 = Number(prompt('Digite o segundo número'))
    let soma = n1 + n2
    alert(`a soma de ${n1} + ${n2} é ${soma}`)
}