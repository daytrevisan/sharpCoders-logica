// A listagem a seguir corresponde à contagem de experimentos laboratoriais, e a quantidade de animais utilizados, sendo coelhos (C), ratos (R) e sapos (S)
// Obs: O primeiro input diz respeito ao número de testes do algoritmo
// O restante dos números fazem parte do vetor, estando no intervalo (1 ≤ Amount ≤ 15)
// Retornar o compilado: - total animais, - total por animal, - percentagem por animal
/* Inputs:
10
10 C
6 R
15 S
5 C
14 R
9 C
6 R
8 S
5 C
14 R
Outputs:
Total: 92 cobaias
Total de coelhos: 29
Total de ratos: 40
Total de sapos: 23
Percentual de coelhos: 31.52 %
Percentual de ratos: 43.48 %
Percentual de sapos: 25.00 %
*/

let totalAnimais = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

let experimentos = [
    [10],
    [10, 'C'],
    [6, 'R'],
    [15, 'S'],
    [5, 'C'],
    [14, 'R'],
    [9, 'C'],
    [6, 'R'],
    [8, 'S'],
    [5, 'C'],
    [14, 'R']
]

let numTeste = experimentos.shift();
//console.log(numTeste);

for(let i=0; i<numTeste; i++) {
    
    let [numAnimal, tipoAnimal] = experimentos.shift().toString().split(' ');
    //console.log(experimento);

    // let numAnimal = parseInt(experimento[0]);
    // let tipoAnimal = toString(experimento[1]);
    //console.log(numAnimal);
    //console.log(tipoAnimal);

    if (tipoAnimal === 'C') { totalCoelhos += parseInt(numAnimal); } 
    
    if (tipoAnimal === 'R') { totalRatos += parseInt(numAnimal); }
         
    if (tipoAnimal === 'S') { totalSapos += parseInt(numAnimal); }

}

totalAnimais = parseInt(totalCoelhos) + parseInt(totalRatos) + parseInt(totalSapos)

let percCoelhos = parseFloat(totalCoelhos/totalAnimais).toFixed(2);
let percRatos = parseFloat(totalRatos/totalAnimais).toFixed(2);
let percSapos = parseFloat(totalSapos/totalAnimais).toFixed(2);

console.log(`Total: ${totalAnimais} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${percCoelhos} %`);
console.log(`Percentual de ratos: ${percRatos} %`);
console.log(`Percentual de sapos: ${percSapos} %`);