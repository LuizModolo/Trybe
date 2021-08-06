// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let arrayBase = [2, 4, 6, 7, 10, 0, -3]
let numInicial = 0;

function teste(array2) {
    for (let index = 0; index < array2.length; index += 1) {
        numInicial += array2[index];
    }
    for(index = 0; index < array2.length; index += 1) {
        if (numInicial > array2[index]) {
            numInicial = array2[index];
        } else {
            numInicial = numInicial;
        }
    }
    return array2.indexOf(numInicial)
}

console.log(teste(arrayBase))