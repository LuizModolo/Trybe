// 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
//   3.a Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
//   3.b Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//   3.c Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
//   3.d Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// Verificando se a funcão existe.

assert.strictEqual(typeof myRemoveWithoutCopy, 'function');

//   3.a Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
const expectedOne = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(expectedOne, [1, 2, 4], 'Resultado diferente do esperado.');

//   3.b Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(expectedOne, [1, 2, 3, 4], 'Não pode retornar o array igual o passado inicialmente')

//   3.c Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações

const newArr = [6, 7, 8, 9];
myRemoveWithoutCopy(newArr, 6);
assert.strictEqual(newArr.length, 3, 'o tamanho tem que ser reduzido em 1');

//   3.d Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const expectedTwo = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepStrictEqual(expectedTwo, [ 1, 2, 3, 4 ], 'Número 5 não faz parte do Array original');
