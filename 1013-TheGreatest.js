// Ler 3 números inteiros e mostrar qual é o maior
// Usar a fórmula MaiorAB = (a+b+abs(a-b))/2
// Números: [(7, 14, 106), (217, 14, 6)]

let lista = [
    [7, 14, 106],
    [217, 14, 6]
]

//let numeros = lista.shift().toString().split(" ");

//console.log(numeros);

for(let i=0; i<lista.length; i++) {
    
    let a = lista[i][0];
    let b = lista[i][1];
    let c = lista[i][2];
    
    let maiorAB = ((a+b)+(Math.abs(a-b)))/2;
    let maiorABC = ((maiorAB+c)+(Math.abs(maiorAB-c)))/2;
    
    console.log(`${maiorABC} eh o maior`);

}