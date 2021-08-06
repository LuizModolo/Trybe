// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// - Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = 'cavalo';
pecaXadrez = 'Bispo';
pecaXadrez = 'torre';
pecaXadrez = 'RaiNha';
let peca = pecaXadrez.toLowerCase();

switch (peca) {
  case 'cavalo':
    console.log('L');
    break;

  case 'bispo':
    console.log('Diagonal');
    break;

  case 'torre':
    console.log('Linhas Retas');
    break;

  case 'rainha':
    console.log('Linhas Retas ou Diagonais');
    break;

  case 'peão':
    console.log('Uma casa para frente');
    break;

  case 'rei':
    console.log('Uma casa em linhas retas ou diagonais');
    break;

  default:
    console.log('Erro!');
}