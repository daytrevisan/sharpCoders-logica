// Leia 100 números inteiros e retorne o maior deles e sua posição
// Input: 2, 113, 45, 34565, 6 ... 8
// Output: 34565, 4

let numeros = [2, 113, 45, 34565, 6, 8];

let posicao = -1;
let maior = -1;

for(let i=1; i<=100; i++) {

    let num = numeros.shift();
    
    if(num > maior) {
        maior = num;
        posicao = i;
    }

}

console.log(`${maior}\n${posicao}`)