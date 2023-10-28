// Calcular a média entre três notas, com pesos 2, 3 e 5

// Pares de Notas: [(5.0, 6.0, 7.0), (5.0, 10.0, 10.0), (10.0, 10.0, 5.0)]
// Resultado com 1 casa decimal

let notas = [
    [5.0, 6.0, 7.0],
    [5.0, 10.0, 10.0],
    [10.0, 10.0, 5.0]
];

const pesoA = 2;
const pesoB = 3;
const pesoC = 5;

for(let i=0; i<notas.length; i++) {

    for(let j=0; j<notas[i].length; j++) {

        let media = (((pesoA*notas[i][j]) + (pesoB*notas[i][j]) + (pesoC*notas[i][j]))
                            /(pesoA+pesoB+pesoC)).toFixed(1);
    
        console.log(`MEDIA = ${media}`);

    }
}