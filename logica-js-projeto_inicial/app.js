/*function helloWord(){
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
}

function potencia(){
    let numero = Number(prompt("Digite um número"))
    console.log(Number(numero*numero))
}

helloWord();

exibirNome();

media();

potencia();

console.log(numeroDobrado())
*/

/*function imc(){
    let altura = Number(prompt('Qual é a asua altura em metros?'))
    let massa = Number(prompt('qual é o seu peso em kg?'))
    let resultado = massa/(altura*altura)
    alert(`seu IMC é ${resultado}`)
}

imc();*/

/*function fatorial() {
    let numero = Number(prompt('Digite um número:'));

    if (numero < 0) {
        alert('Não existe fatorial de números negativos.');
        return;
    }

    let resultado = 1;

    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }

    alert(`O fatorial de ${numero} é ${resultado}`);
}

fatorial();*/

/*function conversor(){
    let reais = Number(prompt('Qual é o valor em reais'))
    let dolar = reais / 4.80
    alert(`o valor em dolares é igual a ${dolar}`)
}

conversor();*/

/*function medidas(){
    let altura = Number(prompt('Qual é a altura da sala'))
    let largura = Number(prompt('Qual é a largura da sala'))
    let area = altura*largura
    let comprimento = largura*4
    alert(`a área da sala é igual a ${area} e o comprimento da sala é ${comprimento}`)
}

medidas();*/

/*function salaCircular(){
    let raio = Number(prompt('Qual é o raio da sala?'))
    let perimetro = 2*3.14*raio
    alert(`A sala tem um perimetro de ${perimetro}`)
}

salaCircular();*/

/*function tabuada() {
    let numero = Number(prompt('Digite um número para saber a sua tabuada'));

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        alert(`${numero} x ${i} = ${resultado}`);
    }
}

tabuada();*/

let listaGenerica = [];
let linguagensDeProgramação = ['JavaScript','C','C++','Kotlin','Python'];
linguagensDeProgramação.push('Java','Ruby','GoLang')
console.log(linguagensDeProgramação)
let familia = ['Rafaella','Valter','Isabel']
console.log(familia[familia.length-1])