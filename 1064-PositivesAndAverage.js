// Leia 6 números (que podem ter ponto flutuante), retorne quantos são positivos e a média entre eles
// Inputs: 7, -5, 6, -3.4, 4.6, 12
// Output: "4 valores positivos" e 7.4

let numeros = [7, -5, 6, -3.4, 4.6, 12];

let contaPositivos = 0;
let somaPositivos = 0;

for (let numero of numeros) {
    if(numero > 0) {
        contaPositivos++;
        somaPositivos += numero; // 29,6
    }
}

let media = somaPositivos/contaPositivos;

console.log(`${contaPositivos} valores positivos`);

console.log(somaPositivos);
console.log(media.toFixed(1));