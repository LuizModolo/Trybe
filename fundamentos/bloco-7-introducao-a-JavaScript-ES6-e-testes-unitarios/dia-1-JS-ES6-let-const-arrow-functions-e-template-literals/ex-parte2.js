// 1. Crie uma função que receba um número e retorne seu fatorial.

let n = 6;

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

console.log(fatorial(n))

// Com recursao

function recursao(n) {
  return (n !== 1) ? n * recursao(n - 1) : n;
}

console.log(recursao((n > 0 ? n : 1)));

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

// 4. Crie um código JavaScript com a seguinte especificação:
//   * Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

let determinada = 'Minhas x coisas lindas!'

const fncOne = string => determinada = determinada.replace(/x/gi, string);

const arrayGlobal = ['JavaScript', 'CSS', 'HTML', 'SoftSkills', 'Unix'];

const fncTwo = fncOne => {
  let arrayModificado = arrayGlobal.sort();
  let resposta = `${fncOne} Minhas cinco principais habilidades são:`;
  for (let i = 0; i < arrayModificado.length; i += 1) {
    resposta = `${resposta}
    ${arrayModificado[i]}`
  }
  return resposta;
}

console.log(fncTwo(fncOne('TOP')));

