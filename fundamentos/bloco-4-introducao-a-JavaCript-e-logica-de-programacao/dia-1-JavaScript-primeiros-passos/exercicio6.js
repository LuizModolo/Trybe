
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