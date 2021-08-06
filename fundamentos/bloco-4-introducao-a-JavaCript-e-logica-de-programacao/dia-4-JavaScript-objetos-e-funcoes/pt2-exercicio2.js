// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 3, 6, 7, 10, 1];
let numInicial = 0;

function teste(array2) {
    for(index = 0; index < array2.length; index += 1) {
        if (numInicial < array2[index]) {
            numInicial = array2[index];
        } else {
            numInicial = numInicial;
        }
    }
    return array2.indexOf(numInicial)
}

console.log(teste(array))