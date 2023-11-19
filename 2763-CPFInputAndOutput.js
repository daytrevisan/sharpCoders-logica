// Leia um cpf no formato XXX.YYY.ZZZ-DD e retorne 4 linhas com os algarismos, todos números inteiros
// Input: 000.000.000-00
/*
000
000
000
00
*/

let input = ['19.37.055-00'];

input = input.toString().split(/[,.-]/);
//console.log(input)

for(let i=0; i<3; i++) {
    let cpf = input[i].padStart(3, '0');
    console.log(cpf);
}

console.log(input[3]);