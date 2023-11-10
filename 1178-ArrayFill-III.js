// Leia um número X e o coloque na primeira posição de um array N[100]
// Na posição 1, divida X por 2 e repita até a posição 99
/*
Input: 200.0000
Output:	
N[0] = 200.0000
N[1] = 100.0000
N[2] = 50.0000
N[3] = 25.0000
N[4] = 12.5000
...
*/

let num = 200.0000;

for(let i=0; i<100; i++) {

    console.log(`N[${i}] = ${num.toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false }).toString().replace(",", ".")}`);    
    num = num / 2.0;

}