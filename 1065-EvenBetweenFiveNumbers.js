// Ler 5 números inteiros e contar quantos são pares
// Input: 7, -5, 6, -4, 12
// Output: "3 valores pares"

let numbers = [7, -5, 6, -4, 12];
let countEven = 0;

for(let number of numbers) {
    if(number % 2 === 0) {
        countEven++;
    }
}

console.log(`${countEven} valores pares`)