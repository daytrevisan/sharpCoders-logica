// Desenvolva um programa que tenha o seguinte output (não há input)
/*
I=1 J=60
I=4 J=55
I=7 J=50
...
I=? J=0
*/

let i = 1;
let j = 60;

for(let k=1; k<100; k++) {

    while(j>=0) {
        console.log(`I=${i} J=${j}`);
    
        i+=3;
        j-=5;

    }

}