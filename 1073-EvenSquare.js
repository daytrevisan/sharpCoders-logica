// Leia um número N (5 < N < 2000) e retorne o quadrado de cada um dos valores pares entre 1 e N
// Cuidar que algumas linguages traz 1e+006 ao invés de 1000000
// Input: 6
// Output: 2^2 = 4, 4^2 = 16, 6^2 = 36

let numero = 6;

for(let num=1; num<=numero; num++) {
    if(num % 2 === 0) {
        console.log(`${num}^2 = ${num**2}`)
    }
}