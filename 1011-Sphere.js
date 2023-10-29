// Calcular e mostrar o volume da esfera a partir de seu raio
// Volume esfera = (4/3) * pi * R3
// pi = 3.14159
// Dica: usar (4/3.0) ou (4.0/3) 
// Resultado em 3 casas decimais
// Valores de raio: 3, 15, 1523

let raio = [3, 15, 1523];

const pi = 3.14159;

for(let i=0; i<raio.length; i++) {
    
    let volume = ((4.0/3)*pi*(raio[i]**3)).toFixed(3);

    console.log(`VOLUME = ${volume}`)

}



