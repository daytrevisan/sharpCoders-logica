// Leia um número inteiro N (0 ≤ N ≤ 100) que corresponde à ordem da matriz bidimensional e construa o array
// O input termina com zero
// Os valores dos arrays devem ser formatados em um campo de tamanho 3 justificados à direita e separados por um espaço. Nenhum espaço deve ser impresso após o último caractere de cada linha do array. Uma linha em branco deve ser impressa após cada array

/*
Input: [1, 2, 3, 4, 5, 0]
Output:
  1
 
  1   1
  1   1
 
  1   1   1
  1   2   1
  1   1   1
   
  1   1   1   1
  1   2   2   1
  1   2   2   1
  1   1   1   1
 
  1   1   1   1   1
  1   2   2   2   1
  1   2   3   2   1
  1   2   2   2   1
  1   1   1   1   1 
*/

let lines = [1, 2, 3, 4, 5, 0];

while (lines.length) {
    let N = parseInt(lines.shift());
    
    if (N === 0){
        break;
    }
    
    for (let i = 0; i < N; i++){
        let linha = [(1).toString().padStart(3)];

        for (let j = 1; j < N; j++){
            linha.push((Math.min(Math.min(i, N - i - 1), Math.min(j, N - j - 1)) + 1).toString().padStart(4));
        }

        console.log(linha.join(''));
    }
    
    console.log('');
}