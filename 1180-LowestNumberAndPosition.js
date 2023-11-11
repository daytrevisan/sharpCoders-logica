// Leia um número N, que corresponde ao tamanho do array X[N], e retorne o menor número e sua posição
// Obs: a 1a linha corresponde ao número de testes N (1 < N <1000)
// A 2a linha são os números do vetor separados por espaço
/* Input: 
10
1 2 3 4 -5 6 7 8 9 10
Output:
Menor valor: -5
Posicao: 4
*/

let array = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let teste = parseInt(array.shift());

let menor = Infinity;
let posicao = -1;

for(let i=0; i<teste; i++) {
    let lista = parseInt(array.shift());

    if(lista < menor) {
        menor = lista;
        posicao = i;
    }
}

console.log(`Menor valor: ${menor}\nPosicao: ${posicao}`)
