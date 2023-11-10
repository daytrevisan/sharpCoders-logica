// Leia um número e retorne o número de Fibonacci correspondente
// Os primeiros números da série são 0 e 1, o próximo é a soma dos dois que é 1, e assim por diante
// Obs: a 1a linha corresponde ao número de testes, um inteiro N (0 ≤ N ≤ 60)
/* Inputs
3
0
4
2
Outputs
Fib(0) = 0
Fib(4) = 3
Fib(2) = 1
*/

let lista = [3, 0, 4, 2];
let teste = parseInt(lista.shift());

for(let i=0; i<teste; i++) {

    let sequencia = parseInt(lista.shift());
    let anterior = 0, atual = 1, proximo;

    for(let j=0; j<sequencia; j++) {
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo
    }
    
    console.log(`Fib(${sequencia}) = ${anterior}`)

}