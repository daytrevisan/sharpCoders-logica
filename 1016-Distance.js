// Leia a distância (em km) e calcule o tempo (em min) para o carro Y se distanciar do carro X
// Vx = 60 km/h; Vy = 90 km/h
// Em 1h (60 min), o carro Y está a 30 km do carro X ---> Y se distancia 1 km a cada 2 min
// Valores de velocidade: 30, 110 e 7

let velocidade = [30, 110, 7];

for(i=0; i<velocidade.length; i++) {

    let analise = velocidade[i].toString().split(" ");
    
    let tempo = parseInt(analise/0.5);
    
    console.log(`${tempo} minutos`);

}