// Leia dois números inteiros (X e Y) e calcule a soma de todos os números não divisíveis por 13 entre X e Y (incluindo-os)
// Input: 100, 200
// Output: 13954

let numeros = [100, 200];

let x = parseInt(numeros.shift()), y = parseInt(numeros.shift());

let soma = 0;

if(x > y) {
    for(let i = y; i <= x; i++) {
        if(i % 13 !== 0)
        soma += i;
    }
} else {
    for (let i = x; i <= y; i++) {
        if(i % 13 !== 0)
        soma += i;
    }
}

console.log(soma);