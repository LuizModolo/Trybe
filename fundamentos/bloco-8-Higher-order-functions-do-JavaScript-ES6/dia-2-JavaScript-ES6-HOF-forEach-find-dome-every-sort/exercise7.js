const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique(arrayLivros) {
  // escreva seu código aqui
  // A função some procura dois autores que tenham nascido no mesmo ano e se achar retorna um true, se ele não achar retorna um false. Nós invertemos o true para false e vice e versa para usar o every depois. O everey se receber o true (após a iversão) ele também retorna true, ou seja, caso nenhum tenha nascido no mesmo ano. E false caso tenha autores nascidos no mesmo dia.
  return arrayLivros.every((book) => !arrayLivros.some((bookTwo) => (bookTwo.author.birthYear === book.author.birthYear) && (bookTwo.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(books), expectedResult);

console.log(authorUnique(books));
