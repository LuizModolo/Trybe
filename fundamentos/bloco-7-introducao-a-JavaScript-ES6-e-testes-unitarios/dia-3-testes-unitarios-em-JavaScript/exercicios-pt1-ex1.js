// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
//   1.a Teste se o retorno de sum(4, 5) é 9
//   1.b Teste se o retorno de sum(0, 0) é 0
//   1.c Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//   1.d Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

//   1.a Teste se o retorno de sum(4, 5) é 9
const expectedOne = sum(4, 5);
assert.strictEqual(expectedOne, 9, 'Valor de soma errado!');

//   1.b Teste se o retorno de sum(0, 0) é 0
const expectedTwo = sum(0, 0);
assert.strictEqual(expectedTwo, 0, 'Valor de soma errado!');

//   1.c Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//   1.d Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
const expectedThree = sum(4, '5');
assert.strictEqual(expectedThree, 9, 'Valor de soma errado!');

// Erro dado ao rodar:     throw new Error('parameters must be numbers');