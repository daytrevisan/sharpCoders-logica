// Ler um número inteiro X (1 <= X <= 1000) e retornar os próximos 6 números ímpares (incluindo X)
// Input: 8
// Output: 9, 11, 13, 15, 17, 19

let numero = 8;
let contador = 0;

while(contador < 6) {
     
    if(numero % 2 !== 0) {
        console.log(numero);            
        contador++;
    }   
        numero++;

}