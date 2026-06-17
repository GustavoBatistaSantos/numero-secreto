function helloWord(){
    console.log("Olá, mundo!");
}

function exibirNome(){
    let nome = prompt('Qual é o seu nome')
    console.log(`Olá,${nome} !`);
}

/*function numeroDobrado(){
    let numero = prompt("digite um número")
    return numero * 2
}*/

/*function media(){
    let n1 = Number(prompt("Digite o primeiro número"))
    let n2 = Number(prompt("Digite o segundo número"))
    let n3 = Number(prompt("Digite o terceiro número"))
    console.log((n1+n2+n3)/3);
}*/

function potencia(){
    let numero = Number(prompt("Digite um número"))
    console.log(Number(numero*numero))
}

helloWord();

exibirNome();

/*media();*/

potencia();

/*console.log(numeroDobrado())*/
