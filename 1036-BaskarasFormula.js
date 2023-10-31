// Leia três números decimais e calcule as raízes da fórmula de Báskara
// Se não for possível calcular, mostrar a mensagem "impossível calcular"
// Valores: (10.0, 20.1, 5.1), (0.0, 20.0, 5.0), (10.3, 203.0, 5.0) e (10.0, 3.0, 5.0)
// Retornos: (R1 = -0.29788 e R2 = -1.71212), ("impossível calcular"), (R1 = -0.02466 e R2 = -19.68408) e ("impossível calcular")

let inputs = [

    [10.0, 20.1, 5.1],
    [0.0, 20.0, 5.0],
    [10.3, 203.0, 5.0],
    [10.0, 3.0, 5.0]

]

for(let i=0; i<inputs.length; i++) {

    let valores = inputs[i].shift().toString().split(" ");
    
    let a = parseFloat(valores[i][0]);
    let b = parseFloat(valores[i][1]);
    let c = parseFloat(valores[i][2]);

    console.log(valores);
    
    let delta = ((Math.pow(b,2)) - 4 * a * c);

    if (a!==0 && delta >= 0) {

        let R1 = (-b + Math.sqrt(delta))/2*a;
        let R2 = (-b - Math.sqrt(delta))/2*a;
        console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`);

    } else {
        console.log("Impossível calcular")
    }

}

// let [a, b, c] = lines.shift().trim().split(" ").map((x) => parseFloat(x));

// let delta = ((Math.pow(b,2) - (4*a*c));

// if ((a !== 0) && (delta >= 0)) {

//     let R1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let R2 = (-b - Math.sqrt(delta)) / (2 * a);

//     console.log(`R1 = ${R1.toFixed(5)}`);
//     console.log(`R2 = ${R2.toFixed(5)}`);
        
// } else {
//     console.log("Impossivel calcular");
// }