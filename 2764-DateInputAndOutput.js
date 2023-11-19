// Leia uma data no formato DD/MM/YY e retorne nos formatos: MM/DD/YY, YY/MM/DD e DD-MM-YY
// Input: 02/08/10
/*
08/02/10
10/08/02
02-08-10
*/

let input = ['02/08/10'];

input = input.toString().split('/');
console.log(input)

let dia = input[0];
let mes = input[1];
let ano = input[2];
console.log(dia, mes, ano)

console.log(`${mes}/${dia}/${ano}`);
console.log(`${ano}/${mes}/${dia}`);
console.log(`${dia}-${mes}-${ano}`);