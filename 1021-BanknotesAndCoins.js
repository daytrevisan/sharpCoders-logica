// Ler um número decimal N (0 ≤ N ≤ 1000000.00) e calcular o menor número possível de notas e moedas que o valor pode ser decomposto
// Notas: 100, 50, 20, 10, 5 e 2
// Moedas: 1, 0.50, 0.25, 0.10, 0.05, 0.01
// Valores de N: 576.73, 4.0 e 91.01
/*
Retorno:
- NOTAS:
- X nota(s) de R$ 100.00
- Y nota(s) de R$ 50.00
- Z nota(s) de R$ 20.00
- W nota(s) de R$ 10.00
- K nota(s) de R$ 5.00
- I nota(s) de R$ 2.00
MOEDAS:
- 0 moeda(s) de R$ 1.00
- 0 moeda(s) de R$ 0.50
- 0 moeda(s) de R$ 0.25
- 0 moeda(s) de R$ 0.10
- 0 moeda(s) de R$ 0.05
- 0 moeda(s) de R$ 0.01
*/

let valor = [576.73, 4.0, 91.01];
valor = parseFloat(valor) + 0.001;

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
 
console.log("NOTAS:");
        
for(let nota of notas) {
    let numNotas = parseInt(valor/nota);
    console.log(`${numNotas} nota(s) de R$ ${nota}.00`);
    valor = (valor % nota);
}
            
console.log("MOEDAS:");
                
for(let moeda of moedas) {
    let numMoedas = parseInt(valor/moeda);
    console.log(`${numMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = valor % moeda;
}