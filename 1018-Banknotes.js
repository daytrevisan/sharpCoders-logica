// Ler um número inteiro N (0 < N < 1000000) e calcular o menor número possível de notas que o valor pode ser decomposto
// Notas: 100, 50, 20, 10, 5, 2 e 1
// Valores de N: 576, 11257 e 503
/*
Retorno:
- Número N
- X nota(s) de R$ 100,00
- Y nota(s) de R$ 50,00
- Z nota(s) de R$ 20,00
- W nota(s) de R$ 10,00
- K nota(s) de R$ 5,00
- I nota(s) de R$ 2,00
- J nota(s) de R$ 1,00
*/

let N = [576, 11257, 503];

//let N = parseInt(input);

const cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(N);

for(let valor of cedulas) {
    let numCedulas = parseInt(N/valor);
    console.log(`${numCedulas} nota(s) de R$ ${valor},00`);
    N = N % valor;
}