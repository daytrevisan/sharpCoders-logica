// Leia um número inteiro N (N < 10000) e retorne todos os números que divididos por N tem como resto 2
// Intervalo: [1, 10000]
// Input: 13
// Output: 2, 15, 28, 41... 9973, 9986, 9999

let n = 13;

for(let i=0; i<=10000; i++) {

    let condicao = (i % n === 2) 

    if(condicao) {
        console.log(i);
    }

}

