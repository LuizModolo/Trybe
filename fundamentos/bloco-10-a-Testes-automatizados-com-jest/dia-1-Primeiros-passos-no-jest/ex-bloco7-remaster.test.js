const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('./ex-bloco7-remaster');

describe('testa função sum', () => {
  it('testa soma de 4 mais 5 = 9', () => {
    expect(9).toBe(sum(4, 5));
  });
  it('testa soma de 0 mais 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('erro ao lançar a string 5 como parâmetro', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('identifica exatamente o erro ao lançar a string 5 como parâmetro', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('testa função myRemove', () => {
  it('verifica o retorno da função entregando array [1, 2, 3, 4] e item 3', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it('verifica o retorno da função entregando array [1, 2, 3, 4] e item 3 com negação', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('verifica o retorno da função entregando array [1, 2, 3, 4] e item 5 com negação', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('testa função myRemoveWhihoutCopy', () => {
  it('verifica o retorno da função entregando array [1, 2, 3, 4] e item 3', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });
  it('verifica o retorno da função entregando array [1, 2, 3, 4] e item 3 com negação', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('verifica o retorno da função entregando array [1, 2, 3, 4] e item 5 com negação', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('testa função myFizzBuzz', () => {
  it('verifica se o num é divisível por 3 e 5', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(30));
  });
  it('verifica se o num é divisível por 3', () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });
  it('verifica se o num é divisível por 5', () => {
    expect('buzz').toBe(myFizzBuzz(10));
  });
  it('verifica se o num não é divisível por 3 e 5', () => {
    expect(8).toBe(myFizzBuzz(8));
  });
  it('verifica o retorno com função vazia', () => {
    expect(false).toBe(myFizzBuzz());
  });
});

describe('testa função myFizzBuzz', () => {
  it('verifica se os objetos 1 e 2 são idênticos', () => {
    expect(obj1).toEqual(obj2);
  });
  it('verifica se os objetos 1 e 3 são idênticos', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('verifica se os objetos 2 e 3 são idênticos', () => {
    expect(obj3).not.toEqual(obj2);
  });
});