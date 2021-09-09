// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arrayNames) {
  // escreva seu código aqui
  const group = arrayNames.reduce((acc, actual) => acc + actual).split('');
  const count = group.reduce((acc2, actual2) => (actual2 === 'a' || actual2 === 'A') ? acc2 + 1 : acc2, 0)
  return count;
};

console.log(containsA(names));

assert.deepStrictEqual(containsA(names), 20);