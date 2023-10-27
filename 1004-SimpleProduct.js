// Calcular o produto de dois números

// Pares de números: [(3, 9), (-30, 10), (0, 9)];

let num = [
    [3, 9],
    [-30, 10], 
    [0, 9]
];

for(let i=0; i<num.length; i++) {

    let produto = num[i][0]*num[i][1];

    console.log(`PRODUTO = ${produto}`);

}