/*
Leia três números inteiros A, B e C
Calcule e mostre a área do:
1. Triângulo retângulo - base A e altura C ---> S = (A*C)/2
2. Círculo - raio = C // pi = 3.14159 ---> S = pi.C^2
3. Trapézio - bases A e B, altura C ---> S = (A+B)/2 * C
4. Quadrado - lado B ---> S = B^2
5. Retângulo - lados A e B ---> S = A*B
*/

let lista = [
    [3.0, 4.0, 5.2],
    [12.7, 10.4, 15.2]
]

const pi = 3.14159;

for(let i=0; i<lista.length; i++) {

    //let valores = lista.shift().toString().split(" ");

    let A = parseFloat(lista[i][0]);
    let B = parseFloat(lista[i][1]);
    let C = parseFloat(lista[i][2]);

    let triangulo = (A*C/2);
    let circulo = (pi*Math.pow(C,2));
    let trapezio = ((A+B)/2)*C;
    let quadrado = Math.pow(B,2);
    let retangulo = (A*B);

    console.log(`TRIANGULO: ${triangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(3)}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(3)}\nRETANGULO: ${retangulo.toFixed(3)}`);

}