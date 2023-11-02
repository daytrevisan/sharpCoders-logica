// Leia 6 números inteiros (positivos e negativos) e retorne quantos são positivos
// Inputs: 7, -5, 6, -3.4, 4.6, 12

let numeros = [7, -5, 6, -3.4, 4.6, 12];

let contaPositivos = 0;

for (let numero of numeros) {
    if(numero > 0) {
        contaPositivos++;
    }
}

console.log(`${contaPositivos} valores positivos`)