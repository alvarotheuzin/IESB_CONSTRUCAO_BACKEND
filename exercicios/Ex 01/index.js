const prompt = require('prompt-sync')();

let { somar, subtrair, multiplicar, dividir, aoQuadrado, raizQuadrada } = require('./calculadora');

console.log("---------Soma---------");

let n1 = parseFloat(prompt("Digite o primeiro número para a SOMA:  "));
let n2 = parseFloat(prompt("Digite o segundo número para a SOMA: "));

let resultadoSomar = somar(n1, n2);
console.log("O resultado da soma é: " + resultadoSomar);

console.log("---------Subtrair---------");

let n3 = parseFloat(prompt("Digite o primeiro número para a SUBTRAÇÃO: "));
let n4 = parseFloat(prompt("Digite o segundo número para a SUBTRAÇÃO: "));

let resultadoSubtrair = subtrair(n3, n4);
console.log("O resultado da soma é: " + resultadoSubtrair);

console.log("---------Multiplicar---------");

let n5 = parseFloat(prompt("Digite o primeiro número para a Multiplicação: "));
let n6 = parseFloat(prompt("Digite o segundo número para a Multiplicação: "));

let resultadoMultiplicar = multiplicar(n5, n6);
console.log("O resultado da soma é: " + resultadoMultiplicar);

console.log("--------- Divisão ---------");

let n7 = parseFloat(prompt("Digite o número para DIVIDIR (dividendo): "));
let n8 = parseFloat(prompt("Digite o número pelo qual DIVIDIR (divisor): "));
let resultadoDividir = dividir(n7, n8);
console.log("O resultado da divisão é: " + resultadoDividir);


console.log("-------- Elevar ao Quadrado ---------");

let n9 = parseFloat(prompt("Digite o número para elevar ao quadrado: "));
let resultadoQuadrado = aoQuadrado(n9);
console.log(`O número ${n9} ao quadrado é: ` + resultadoQuadrado);


console.log("\n--------- Raiz Quadrada ---------");

let n10 = parseFloat(prompt("Digite o número para calcular a raiz quadrada: "));
let resultadoRaiz = raizQuadrada(n10);
console.log(`A raiz quadrada de ${n10} é: ` + resultadoRaiz);