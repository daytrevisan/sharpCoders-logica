// Leia um número T (2 ≤ T ≤ 50) e preencha um vetor N[1000] com os números de 0 a T-1
// Para cada posição do array N, imprima "N[i] = x", onde i é a posição do array e x é o número armazenado nessa posição
/*
Input: 3
Output:
N[0] = 0
N[1] = 1
N[2] = 2
N[3] = 0
N[4] = 1
N[5] = 2
N[6] = 0
N[7] = 1
N[8] = 2
...
*/

let lista = 3;
let t = parseInt(lista);
let n = 0;

for(let i=0; i<10; i++) {

    console.log(`N[${i}] = ${n}`);
    n +=1;
    if(n === t)
        n = 0;
    
}