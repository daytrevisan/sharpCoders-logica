// Calcular a soma de dois números

let num = [(30, 10), (-30, 10), (0, 0)];

for(i=0; i<num.length; i++) {
    for(j=0, j<num.length; j++) {
        let soma = num[i] + num[j];
        console.log(`SOMA = ${soma}`);
    }
}