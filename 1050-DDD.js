// Ler o número de DDD e retornar a localidade correspondente
// Caso o DDD não seja encontrado, retornar "DDD nao cadastrado"
/*
61 Brasilia
71 Salvador
11 Sao Paulo
21 Rio de Janeiro
32 Juiz de Fora
19 Campinas
27 Vitoria
31 Belo Horizonte
*/

let listaGeral = [
    [61, "Brasilia"],
    [71, "Salvador"],
    [11, "Sao Paulo"],
    [21, "Rio de Janeiro"],
    [32, "Juiz de Fora"],
    [19, "Campinas"],
    [27, "Vitoria"],
    [31, "Belo Horizonte"]
]

console.log(lista)

for (i=0; i<listaGeral.length; i++) {
    
    let lista = listaGeral[i].shift().toString().split(" ");
    let DDD = lista[i][0];
    let localidade = lista[i][1];
    console.log(DDD, localidade);
    
}

// let [DDD, destination] = lines.shift().split(" ").map((DDD) => parseInt(DDD));

// switch(DDD) {
//     case 61: console.log("Brasilia"); break;
//     case 71: console.log("Salvador"); break;
//     case 11: console.log("Sao Paulo"); break;
//     case 21: console.log("Rio de Janeiro"); break;
//     case 32: console.log("Juiz de Fora"); break;
//     case 19: console.log("Campinas"); break;
//     case 27: console.log("Vitoria"); break;
//     case 31: console.log("Belo Horizonte"); break;
//     default: console.log("DDD nao cadastrado");
// }
