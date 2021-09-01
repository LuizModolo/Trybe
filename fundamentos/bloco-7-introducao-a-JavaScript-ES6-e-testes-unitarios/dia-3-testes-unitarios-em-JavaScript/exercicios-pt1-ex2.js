// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//   2.a Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//   2.b Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//   2.c Verifique se o array passado por parâmetro não sofreu alterações
//   2.d Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// Verificando se a funcão existe.

assert.strictEqual(typeof myRemove, 'function');

//   2.a Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const expectedOne = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(expectedOne, [ 1, 2, 4 ], 'Não retorna o array esperado');

//   2.b Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(expectedOne, [1, 2, 3, 4], 'Não pode retornar o array igual o passado inicialmente')

//   2.c Verifique se o array passado por parâmetro não sofreu alterações

const newArr = [5, 6, 7, 8];
myRemove(newArr, 5);
assert.deepStrictEqual(newArr, [5, 6, 7, 8], 'não pode modificar o Array original');

//   2.d Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const expectedTwo = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(expectedTwo, [ 1, 2, 3, 4 ], 'Número 5 não faz parte do Array original');
