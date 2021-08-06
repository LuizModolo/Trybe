// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info['recorrente'] = 'sim';

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let index in info){
    console.log (index)
}