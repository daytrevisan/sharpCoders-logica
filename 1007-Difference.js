// Ler 4 números inteiros A, B, C e D e calcular (A * B - C * D)

// Números: [5, 6, 7, 8], [0, 0, 7, 8], [5, 6, -7, 8]
// Resultado com 1 casa decimal

let numbers = [
    [5, 6, 7, 8],
    [0, 0, 7, 8],
    [5, 6, -7, 8]
];

for(let i=0; i<numbers.length; i++) {
    
    // (A * B - C * D)
    let diferenca = ((numbers[i][0]*numbers[i][1]) - (numbers[i][2]*numbers[i][3]));

    console.log(`DIFERENCA = ${diferenca}`);

}