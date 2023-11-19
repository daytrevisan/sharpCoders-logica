// Leia um número N que representa o tamanho de um array bidimensional M[N][N]
// A entrada contém muitos casos de teste e termina com EOF
// Cada caso de teste consiste em um número inteiro N (3 ≤ N < 70), que indica o tamanho (linhas e colunas) de um array bidimensional que deve ser impresso
/*
Input: 4, 7
Output:
1332
3123
3213
2331
1333332
3133323
3313233
3332333
3323133
3233313
2333331
*/

var input = [4, 7];
var size = parseInt(input.shift());
 
while(size >0 ){
        
    for(let i = 0; i < size; i++){
        let line = [];
                
        for(let j = 0; j < size; j++){
            let print = 0;

            if(i == j) {
                print = 2;
            }
            
            if( (i+j+1) == size ){
                print = 1;
            }          
        
            line.push(3 - print)
        }
        
        console.log(line.join(''))
    }

    size = parseInt(input.shift());
}