// Leia um número, coloque este número na primeira posição do array N[10] e dobre o valor na posição seguinte
// Input: 1
/* Output:
X[0] = 1
X[1] = 2
X[2] = 4
X[3] = 8
...
*/

let numero = 1;
let x = [];

x.push(numero);

console.log(x)

for(let i=0; i<10; i++) {

    x.push(x[i]*2);
    console.log(`N[${i}] = ${x[i]}`);

}