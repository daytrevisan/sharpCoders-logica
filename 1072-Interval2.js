// Ler um número X e retornar quantos números estão dentro do intervalo [10,20] e quantos estão fora
// Obs: O primeiro input diz respeito ao número de testes do algoritmo
// O restante dos números fazem parte do vetor
// Input: 4 (número de testes) e 14, 123, 10 e -25 (números do intervalo)
// Output: 2 in, 2 out

let vetor = [4, 14, 123, 10, -25];

let teste = parseInt(vetor.shift());
let numeros = vetor;

let qtdeIn = 0;
let qtdeOut = 0;

while(numeros.length < teste) {
    
    numeros.push(vetor.shift());
    
}
    for(let i=0; i<teste; i++) {

        if( (numeros[i] >= 10) && (numeros[i] <= 20) ) {
            qtdeIn++;
        } else {           
            qtdeOut++;
        }
    }
    
console.log(`${qtdeIn} in\n${qtdeOut} out`);