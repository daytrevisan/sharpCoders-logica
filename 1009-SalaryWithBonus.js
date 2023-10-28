// Ler o nome do vendedor, o salário fixo e o total vendido
// Aplicar uma comissão de 15% sobre o total vendido
// Total é a soma de salário e comissão

// Vendedor 1: JOAO, 500.00, 1230.30
// Vendedor 2: PEDRO, 700.00, 0.00
// Vendedor 3: MANGOJATA, 1700.00, 1230.50

let vendedor = [
    ["JOAO", 500.00, 1230.30],
    ["PEDRO", 700.00, 0.00],
    ["MANGOJATA", 1700.00, 1230.50]
]

for(let i=0; i<vendedor.length; i++) {

    for(let j=0; j<vendedor[i].length; j++) {
        
        let salario = vendedor[i][1];
        let comissao = 0.15 * vendedor[i][2];
        
        let total = (salario + comissao).toFixed(2);
        
        console.log(`TOTAL = R$ ${total}`);

    }
}