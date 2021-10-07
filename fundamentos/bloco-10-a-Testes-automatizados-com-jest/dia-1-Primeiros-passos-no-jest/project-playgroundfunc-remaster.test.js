const { encode, decode, techList, hydrate } = require('./project-playgroundfunc-remaster');

describe('testa função encode e decode', () => {
  it('testa se encode é uma função', () => {
    expect('function').toEqual(typeof(encode));
  });
  it('testa se decode é uma função', () => {
    expect('function').toEqual(typeof(decode));
  });
  it('encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('13 s2r2m4s 5t3l3z1d4s').toEqual(encode('Ai seremos utilizados'));
  });
  it('decode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('ai seremos utilizados').toEqual(decode('13 s2r2m4s 5t3l3z1d4s'));
  });
  it('Teste se as demais letras/números não são convertidos para encode', () => {
    expect('67890bcdfghjklmnpqrstvxyw').toEqual(encode('67890bcdfghjklmnpqrstvxyw'));
  });
  it('Teste se as demais letras/números não são convertidos para decode', () => {
    expect('67890bcdfghjklmnpqrstvxyw').toEqual(decode('67890bcdfghjklmnpqrstvxyw'));
  });
  it('se a string passada na função tem o mesmo tamanho da retornada', () => {
    expect(8).toEqual(encode('fernando').length);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});