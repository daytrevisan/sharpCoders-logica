// Ler um array A[100] e retornar os números menores ou iguais a 10 e suas respectivas posições
/* Input:
0
-5
63
-8.5
...
Output:
A[0] = 0.0
A[1] = -5.0
A[3] = -8.5
...
*/

let x = [0, -5, 53, -8.5];

for(let i=0; i<100; i++) {

    if(x[i] <= 10) {
        console.log(`A[${i}] = ${(x[i]).toFixed(1)}`)
    }

}