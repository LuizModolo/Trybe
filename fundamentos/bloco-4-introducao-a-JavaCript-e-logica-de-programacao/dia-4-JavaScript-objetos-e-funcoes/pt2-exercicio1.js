// Parte II - Funções
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let a = 'anitalatina'

function palindromo(palavra){
    let palavraInverso = [];
    for (let index = 0; index < palavra.length; index += 1){
        palavraInverso.unshift(palavra[index])
    }
    return palavraInverso
}

if (palindromo(a).join('') == a) {
    console.log(true + " " + palindromo(a).join(''));
} else {
    console.log(false + " " + a);
}