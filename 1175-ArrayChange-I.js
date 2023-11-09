// Leia um array A[20] e troque os elementos de posição
// O array aceita números nulos, positivos e negativos
/*
Input:
0
-5
...
63
230
Output:
N[0] = 230
N[1] = 63
...
N[18] = -5
N[19] = 0
*/

// let array = [0, -5, 63, 230];

// let lista = array.reverse();

// for(let i=0; i<array.length; i++) {
    
//     console.log(`N[${i}] = ${lista[i]}`)
    
// }

let lines = [0, -5, 8, 99, 127, -512, 1, -88, 121, 5, 99, -50, 8, 65, 345, 22, 41, 77, 63, 230];

let j=19;

for(let i=0; i<20; i++) {
    
    //parseInt(lines.shift());
    
    console.log(`N[${i}] = ${parseInt(lines[j])}`);
    j--;

}