// 1. Crie uma função que receba um número e retorne seu fatorial.

const fatorial = num => {
  let sum = 1;
  if (num === 0){
    return 1;
  } else {
    for (let i = 2; i <= num; i += 1) {
      sum *= i;
    }
  }
  return sum;
}

console.log(fatorial(6))

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra. Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")  retorna 'aconteceu'

const biggerWord = frase => {
  let array = [];
  let palavra = 'a';
  array = frase.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > palavra.length) {
      palavra = array[i];
    }
  }
  return palavra
}

console.log(biggerWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

