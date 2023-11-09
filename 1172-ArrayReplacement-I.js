// Leia um array X[10], substitua os valores nulos e negativos de X por 1 e imprima os números do array
/* Input:
0
-5
63
0
...
Output:
X[0] = 1
X[1] = 1
X[2] = 63
X[3] = 1
...
*/

let array = [0, -5, 63, 0];

for(let i=0; i<10; i++) {
    
    if(array[i] <= 0) {
        console.log(`X[${i}] = 1`)
    } else {
        console.log(`X[${i}] = ${array[i]}`)
    }

}