// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let arrayBase = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let wordBase = 'a';

function maiorNome(array){
    for (index = 0; index < array.length; index += 1) {
        if (wordBase.length < array[index].length) {
        wordBase = array[index];
        } else {
        wordBase = wordBase;
        }
    }
    return wordBase
}
console.log(maiorNome(arrayBase))