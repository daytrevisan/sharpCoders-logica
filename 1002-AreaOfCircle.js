// Calcular a área de um círculo

// Valores de raio: 2.00, 100.64, 150.00
// A área de um círculo é dada por: A = π*R^2

const pi = 3.14159;

let R = [2.00, 100.64, 150.00];

for(i=0; i<R.length; i++) {
    let area = (pi*(R[i]*R[i])).toFixed(4);
    console.log(`A=${area}`)
}