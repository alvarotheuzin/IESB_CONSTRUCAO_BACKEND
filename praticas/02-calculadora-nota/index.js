const prompt = require('prompt-sync')();

const n1 = prompt('Digite a nota da Prova 1: ');
const n2 = prompt('Digite a nota da Prova 2: ');

const prova1 = parseFloat(n1);
const prova2 = parseFloat(n2);

const media = prova1 * 0.4 + prova2 * 0.6;

console.log(`A Media da Prova 1: ${prova1} + a Prova 2: ${prova2} é igual a: ${media}`);

if (media >= 0 && media <= 4.9) {
    console.log("MI")
}
else if (media >= 5 && media <= 6.9) {
    console.log("MM")
} 
else if (media >= 7 && media <= 8.9) {
    console.log("MS")
}
else if (media >= 9)  {
    console.log("SS")
}

// devolve apenas a média como MM ou SS
// dá a opção de saber a nota em valor, se não, agradece e fecha.
