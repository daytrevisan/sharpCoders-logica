// Ler um número inteiro N (em segundos) e expressá-lo em horas, minutos e segundos
// Inputs: 556, 1 e 140153
// Outputs: (0:9:16), (0:0:1) e (38:55:53)

let N = [556, 1, 140153];

//let N = parseInt(input);

for(let valor of N) {
    
    let hours = parseInt(valor / 3600); // quociente são as horas
    
    let resto1 = (valor % 3600); // encontro os minutos
    let minutes = parseInt(resto1 / 60);
    
    let resto2 = (resto1 % 60); // encontro os segundos
    let seconds = parseInt(resto2);
    
    console.log(`${hours}:${minutes}:${seconds}`)

}
