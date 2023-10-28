// Ler o número do funcionário, suas horas trabalhadas em um mês e o recebido por hora
// Mostrar o total com 2 casas decimais

// Funcionario1 (25, 100, 5.50)
// Funcionario2 (1, 200, 20.50)
// Funcionario3 (6, 145, 15.55)

let funcionario = [
    [25, 100, 5.50],
    [1, 200, 20.50],
    [6, 145, 15.55]
];

for(let i=0; i<funcionario.length; i++) {

    for(let j=0; j<funcionario[i].length; j++) {

        // salario = horasPorMes * recebidoPorHora
        let salario = (funcionario[i][1] * funcionario[i][2]).toFixed(2);
        
        let idFuncionario = funcionario[i][0];

        console.log(`ID = ${idFuncionario} \nSALÁRIO = U$ ${salario}`)

    }
}