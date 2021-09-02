// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberGenerator = () => {
  return Math.floor(Math.random() * (5 - 1)) + 1;
}

const resultHOF = (betNumber, func) => {
  const aleatoryNumber = func();
  let answer = '';
  if (betNumber === aleatoryNumber) {
    answer = `Parabéns você ganhou! Seu número foi ${betNumber} e o número sorteado foi ${aleatoryNumber}!`;
  } else {
    answer= `Tente novamente. Seu número foi ${betNumber} e o número sorteado foi ${aleatoryNumber}!`;
  }
  return answer;
}

console.log(resultHOF(3, numberGenerator));