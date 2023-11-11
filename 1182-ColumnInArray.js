// Ler um n. (coluna de um array), um caractere maiúsculo (operação a ser performada, S ou M) e os elementos de um array bidimensional M[12][12]
// Retornar o cálculo da soma (S) ou da média (M) de todos os elementos da coluna em questão
/*
Input:
5
S
1.0
-3.5
2.5
4.1
...
Output:
12.6
*/

let input = [5, 'S', 1.0, -3.5, 2.5, 4.1];

const [coluna, operacao] = input.splice(0, 2);

let soma = 0;
let cont = 0;
let resultado = 0;

for(let i=0; i<12; i++) {

    for(let j=0; j<12; j++) {    
        const numero = parseFloat(input.shift());
        //console.log(numero);

        if(j === parseInt(coluna)) {
            soma += numero;
            cont += 1;
        }     
    }    
}

operacao.toUpperCase() === 'S' ? resultado = parseFloat(soma) : resultado = parseFloat(soma/cont);

//console.log(typeof(resultado))
console.log(resultado.toFixed(1))