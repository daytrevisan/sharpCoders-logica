// Leia um número inteiro, que expressa a idade de uma pessoa em dias
// Retorne a idade em anos, meses e dias
/*
- x ano(s)
- y mes(es)
- z dia(s)
*/
// Inputs: 400, 800 e 30

let idades = [400, 800, 30]

for(let idade of idades) {
    
    let anos = parseInt(idade / 365); // quociente são os anos
    
    let resto1 = (idade % 365);
    let meses = parseInt(resto1 / 30); // encontro os meses
    
    let resto2 = (resto1 % 30);
    let dias = parseInt(resto2); // encontro os dias
    
    console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`)

}