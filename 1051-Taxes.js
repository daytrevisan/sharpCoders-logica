// Ler o valor de salário (2 casas decimais) e retorne o imposto correspondente
// Retorno no formato "R$ ${valorImposto}" (2 casas decimais) ou "Isento"
/*
Tabela:
- De 0.00 a R$2000.00 --> Isento
- R$2000.01 a R$3000.00 --> 8%
- R$3000.01 a R$4500.00 --> 18%
- Acima de R$4500.00 --> 28%
*/
// Inputs: 3002.00, 1701.12 e 4520.00

let salario = [3002.00, 1701.12, 4520.00];

//let renda = parseFloat(salario.toString().split(" ").map((renda) => parseFloat(renda)));

let imposto = 0;

const salarioBase = 2000;

for(let i=0; i<salario.length; i++) {

    if (salario[i] <= 2000) {
        console.log("Isento");
        
    } else if ((salario[i] > 2000) && (salario[i] <= 3000)) {
        imposto = ((salario[i] - 2000) * 0.08);
        console.log(`R$ ${imposto.toFixed(2)}`);
        
    } else if ((salario[i] > 3000) && (salario[i] <= 4500)) {
        imposto = (1000 * 0.08) + ((salario[i] - 3000) * 0.18);
        console.log(`R$ ${imposto.toFixed(2)}`);
        
    } else {
        imposto = (1000 * 0.08) + (1500 * 0.18) + ((salario[i] - 4500) * 0.28);
        console.log(`R$ ${imposto.toFixed(2)}`);
    }
}
