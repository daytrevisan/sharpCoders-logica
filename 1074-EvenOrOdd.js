// Ler um número X e retornar a classificação do número
// Se par ou ímpar E positivo ou negativo OU null (para zero)
// Obs: O primeiro input diz respeito ao número de testes do algoritmo
// O restante dos números fazem parte do vetor
// Input: 4 (número de testes) e [-5, 0, 3, -4] (números do intervalo)
// Output: ODD NEGATIVE, NULL, ODD POSITIVE, EVEN NEGATIVE

let vetor = [4, -5, 0, 3, -4];

let teste = parseInt(vetor.shift());
let numeros = vetor;

for(let i = 0; i < teste; i++){
    
    let numero = parseInt(numeros.shift());
    
    if(numero === 0){
        console.log('NULL');
    } else {
        let paridade = x % 2 === 0 ? 'PAR' : 'IMPAR';
        let positividade = x > 0 ? 'POSITIVO' : 'NEGATIVO';
        console.log(paridade + ' ' + positividade);
    }
}