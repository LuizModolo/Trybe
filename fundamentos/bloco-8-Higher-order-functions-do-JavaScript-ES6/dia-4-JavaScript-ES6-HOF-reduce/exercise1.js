// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const groupArrays = arrays.reduce((acc, actual) => {
    const grouping = acc.concat(actual);
    return grouping;
  } , []);
  return groupArrays;
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);