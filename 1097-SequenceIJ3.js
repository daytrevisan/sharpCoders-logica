// Desenvolva um programa que tenha o seguinte output (não há input)
/*	
I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=9
I=3 J=8
I=3 J=7
...
I=9 J=15
I=9 J=14
I=9 J=13
*/

let i = 1;
let j = 7;

while(i <= 9) {

    for(let k=0; k<3; k++) {
        console.log(`I=${i} J=${j}`); 
        j--;   
    }

    i+=2;
    j+=5;
        
}