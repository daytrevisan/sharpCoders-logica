// Ler um número decimal N (0 ≤ N ≤ 1000000.00) e calcular o menor número possível de notas e moedas que o valor pode ser decomposto
// Notas: 100, 50, 20, 10, 5 e 2
// Moedas: 1, 0.50, 0.25, 0.10, 0.05, 0.01
// Valores de N: 576.73, 4.0 e 91.01
/*
Retorno:
- NOTAS:
- X nota(s) de R$ 100,00
- Y nota(s) de R$ 50,00
- Z nota(s) de R$ 20,00
- W nota(s) de R$ 10,00
- K nota(s) de R$ 5,00
- I nota(s) de R$ 2,00
MOEDAS:
- 0 moeda(s) de R$ 1.00
- 0 moeda(s) de R$ 0.50
- 0 moeda(s) de R$ 0.25
- 0 moeda(s) de R$ 0.10
- 0 moeda(s) de R$ 0.05
- 0 moeda(s) de R$ 0.01
*/

let valor = [576.73, 4.0, 91.01];

//let valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log(Math.floor(valor).toFixed(0));

console.log("NOTAS:")
console.log(`${Math.floor(valor/100).toFixed(0)} nota(s) de R$ 100.00`);
valor %= 100;

console.log(`${Math.floor(valor/50).toFixed(0)} nota(s) de R$ 50.00`);
valor %= 50;

console.log(`${Math.floor(valor/20).toFixed(0)} nota(s) de R$ 20.00`);
valor %= 20;

console.log(`${Math.floor(valor/10).toFixed(0)} nota(s) de R$ 10.00}`);
valor %= 10;

console.log(`${Math.floor(valor/5).toFixed(0)} nota(s) de R$ 5.00`);
valor %= 5;

console.log(`${Math.floor(valor/2).toFixed(0)} nota(s) de R$ 2.00`);
valor %= 2;

console.log("MOEDAS:")
console.log(`${Math.floor(valor/1).toFixed(2)} moeda(s) de R$ 1.00`);
valor %= 1;

console.log(`${Math.floor(valor/0.5).toFixed(2)} moeda(s) de R$ 0.50`);
valor %= 0.5;

console.log(`${Math.floor(valor/0.25).toFixed(2)} moeda(s) de R$ 0.25`);
valor %= 0.25;

console.log(`${Math.floor(valor/0.10).toFixed(2)} moeda(s) de R$ 0.10`);
valor %= 0.1;

console.log(`${Math.floor(valor/0.05).toFixed(2)} moeda(s) de R$ 0.05`);
valor %= 0.05;

console.log(`${Math.floor(valor/0.01).toFixed(2)} moeda(s) de R$ 0.01`);
valor %= 0.01;

// console.log("NOTAS:")
// for(let nota of notas) {
//     let numNotas = Math.floor(valor/nota);
//     console.log(`${numNotas} nota(s) de R$ ${nota.toFixed(2)}`);
//     valor %= nota;
// }

// console.log("MOEDAS:")
// for(let moeda of moedas) {
//     let numMoedas = Math.floor(valor/moeda);
//     console.log(`${numMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
//     valor %= moeda;
// }