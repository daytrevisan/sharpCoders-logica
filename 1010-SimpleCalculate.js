// Ler o código do produto, o número de unidades e o preço por unidade

// Compra 1: [(12, 1, 5.30), (16, 2, 5.10)]
// Compra 2: [(13, 2, 15.30), (161, 4, 5.20)]
// Compra 3: [(1, 1, 15.10), (2, 1, 15.10)]

let produtos = [
    [
        [12, 1, 5.30],
        [16, 2, 5.10]
    ],
    [
        [13, 2, 15.30],
        [161, 4, 5.20]
    ],
    [
        [1, 1, 15.10],
        [2, 1, 15.10]
    ]
]

let linhaUm = produtos.shift().toString().split(" ");
let linhaDois = produtos.shift().toString().split(" ");

let id1 = linhaUm[0];
let unit1 = parseInt(linhaUm[1]);
let price1 = parseFloat(linhaUm[2]);

let id2 = linhaDois[0];
let unit2 = parseInt(linhaDois[1]);
let price2 = parseFloat(linhaDois[2]);

let resLinhaUm = parseFloat(unit1*price1);
let resLinhaDois = parseFloat(unit2*price2);

let total = (resLinhaUm+resLinhaDois).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${total}`)

// for(let i=0; i<produtos.length; i++) {

//         let total = parseFloat(produtos[i][1] * produtos[i][2]);

//         total += total;
        
//         console.log(`VALOR A PAGAR: R$ ${total}`);

// }