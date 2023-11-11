// Ler 15 números e separá-los em duas matrizes diferentes (par ou ímpar), tendo apenas 5 posições cada
/*
Input: [1, 3, 4, -4, 2, 3, 8, 2, 5, -7, 54, 76, 789, 23, 98]
Output:
par[0] = 4
par[1] = -4
par[2] = 2
par[3] = 8
par[4] = 2
impar[0] = 1
impar[1] = 3
impar[2] = 3
impar[3] = 5
impar[4] = -7
impar[0] = 789
impar[1] = 23
par[0] = 54
par[1] = 76
par[2] = 98
*/

function clear(arr) {
    while(arr.length){
        arr.pop(); // remover o último elemento
    }
    arr.pop();
}

let lines = [1, 3, 4, -4, 2, 3, 8, 2, 5, -7, 54, 76, 789, 23, 98];
let par = [];
let impar = [];

for(let i=0; i<lines.length; i++) {
    let n = parseInt(lines.shift());
    
    if(n % 2 !== 0) {
        impar.push(n);
        if(impar.length === 5) {
            for(let m=0; m<5; m++) {
                console.log(`impar[${m}] = ${impar[m]}`);
            }
            clear(impar);
        }
        
    } else {
        par.push(n);
        if(par.length === 5) {
            for(let m=0; m<5; m++) {
                console.log(`par[${m}] = ${par[m]}`);
            }
            clear(par);
        }
    }
}

if(impar.length !== 0) {
    for(let i=0; i<impar.length; i++) {
        console.log(`impar[${i}] = ${impar[i]}`);
    }
}
if(par.length !== 0) {
    for(let i=0; i<par.length; i++) {
        console.log(`par[${i}] = ${par[i]}`);
    }
}