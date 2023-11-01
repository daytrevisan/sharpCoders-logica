// Calcular a média de consumo de um carro a partir das informações de distância percorrida (em km) e o total de combustível gasto em litros
// Valores: (500, 35.0), (2254, 124.4) e (4554, 464.6)
// Resultado em km/l com 3 casas decimais

let valores = [
    [500, 35.0],
    [2254, 124.4],
    [4554, 464.6]
]

//let valores = input.toString().split(" ");

for(let i=0; i<valores.length; i++) {

    let distancia = parseInt(valores[i][0]);
    let gasto = parseFloat(valores[i][1]);
    
    let performance = parseFloat(distancia/gasto);
    
    console.log(`${performance.toFixed(3)} km/l`)
}

