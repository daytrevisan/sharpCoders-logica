// Ler 5 números inteiros e contar quantos são pares, ímpares, positivos ou negativos
// Input: -5, 0, -3, -4, 12
// Output: "3 valores pares"

let numeros = [-5, 0, -3, -4, 12];

let contaPares = 0;
let contaImpares = 0;
let contaPositivos = 0;
let contaNegativos = 0;

for(let numero of numeros) {
    if(numero % 2 === 0) {
        contaPares++;
    } else {
        contaImpares++;
    } 
    
    if (numero > 0) {
        contaPositivos++;
    } else if (numero < 0 ) {
        contaNegativos++;
    }
}

console.log(`${contaPares} valores pares`);
console.log(`${contaImpares} valores ímpares`);
console.log(`${contaPositivos} valores positivos`);
console.log(`${contaNegativos} valores negativos`);