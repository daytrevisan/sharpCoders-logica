// Ler o tempo gasto (em h) e a média de velocidade (em km/h) e retornar o combustível em uma viagem
// Resultado deve ser apresentado com 3 casas decimais
// Performance do carro: 12 km/h
// Inputs (tempo, média) = (10, 85), (2, 92) e (22, 67)

const performance = 12;

let viagem = [
    [10, 85],
    [2, 92],
    [22, 67]
]

for(let i=0; i<viagem.length; i++) {
    
    let tempo = viagem[i][0].toString().split(" ");
    let velocidade = viagem[i][1].toString().split(" ");

    let distancia = tempo*velocidade;

    let litrosGastos = parseFloat(distancia/performance);
    
    console.log(`${litrosGastos.toFixed(3)}`);

}
