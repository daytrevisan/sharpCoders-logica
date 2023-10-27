// Calcular a média entre duas notas, uma com peso 3,5 e outra com peso 7,5

// Pares de Notas: [(5.0, 7.1), (0.0, 7.1), (10.0, 10.0)]
// Resultado com 5 casas decimais

let notas = [
    [5.0, 7.1],
    [0.0, 7.1],
    [10.0, 10.0]
];

const pesoA = 3.5;
const pesoB = 7.5;

for(let i=0; i<notas.length; i++) {

    //for(let j=0; j<notas[i].length; j++) {

        let media = (((pesoA*[i][0])+(pesoB*[i][1]))/(pesoA+pesoB)).toFixed(5);

        console.log(`MEDIA = ${media}`);
    //}
}