// Leia um caracter maiúsculo que indica a operação a ser performada (soma ou média) e aplique a operação a todos os números que estão abaixo da diagnonal secundária do array bidimensional M[12][12]
// Retornar o cálculo da soma (S) ou da média (M) de todos os elementos da área em questão
// Área corresponde ao "triângulo inferior" do cruzamento entre diagonal principal e secundária
/*
Input:
S
5.0
130.0
-3.5
2.5
4.1
...
Output:
126.2
*/

let input = ['S', 5.0, 130.0, -3.5, 2.5, 4.1];

const operacao = input.shift();

let soma = 0;
let cont = 0;

for(let i=0; i<12; i++) {

    for(let j=0; j<12; j++) {    
        const numero = parseFloat(input.shift());
        //console.log(numero);

        if ((i > j) && (j < 11-i)) {
            soma += numero;
            cont += 1;
        }     
    }    
}

let resultado = operacao.toUpperCase() === 'S' ? parseFloat(soma) : parseFloat(soma/cont);

console.log(resultado.toFixed(1))