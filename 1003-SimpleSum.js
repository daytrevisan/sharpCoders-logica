// Calcular a soma de dois números

// Pares de números: [(30, 10), (-30, 10), (0, 0)]

let numeros = [
    [30, 10],
    [-30, 10],
    [0, 0]
];

for(let i=0; i<numeros.length; i++) {

    for(let j=0; j<numeros[i].length; j++) {

        let soma = parseInt(numeros[i][0]) + parseInt(numeros[i][1]);

        console.log(`SOMA = ${soma}`);
    }
}