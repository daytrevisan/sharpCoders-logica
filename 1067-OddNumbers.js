// Ler um número inteiro X (1 <= X <= 1000) e retornar os números ímpares de 1 a X (incluindo X)
// Input: 8
// Output: 1, 3, 5, 7

let numero = 8;

for(let num = 1; num <= numero; num++) {

    if(num % 2 !== 0){
        console.log(num);
    }
    
}