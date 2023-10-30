// Leia 4 valores correspondentes a dois pontos no plano, p1(x1,y1) e p2(x2,y2)
// Calcule a distância entre os pontos
// Distance: raiz(x2-x1)^2-(y2-y1)^2
// Valores: [(1.0, 7.0),(5.0, 9.0)], [(-2.5, 0.4), (12.1, 7.3)] e [(2.5, -0.4), (-12.2, 7.0)]
// Resultados: [4.4721], [16.1484] e [16.4575]

let pontos = [
    [ [1.0, 7.0], [5.0, 9.0] ],
    [ [-2.5, 0.4], [12.1, 7.3] ],
    [ [2.5, -0.4], [-12.2, 7.0] ]
]

let valores1 = pontos.shift().toString().split(" ");
let x1 = parseFloat(valores1[0]);
let y1 = parseFloat(valores1[1]);

console.log(x1,y1)

let valores2 = pontos.shift().toString().split(" ");
let x2 = parseFloat(valores2[0]);
let y2 = parseFloat(valores2[1]);

console.log(x2,y2)

var distancia = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

console.log(distancia)

// console.log(pontos);

// let input1 = pontos.shift().toString().split(" ");
// let input2 = pontos.shift().toString().split(" ");
// let input3 = pontos.shift().toString().split(" ");

// console.log(pontos);

// console.log(input1);
// console.log(input2);
// console.log(input3);

// for(i=0; i<pontos.length; i++) {

//     let totalX = Math.pow(p2[i][2]-p1[i][0], 2);
//     let totalY = Math.pow(p2[i][3]-p1[i][1], 2);

//     let distance = Math.sqrt(totalX + totalY);

//     console.log(distance);

// }