// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 46, 22, 12];

const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  const result = array.find((number) => number % 3 === 0 && number % 5 === 0);
  if (!result) {
    return `Não existe nenhum número divisível por 3 e 5`;
  } else {
    return `O primeiro número divisível por 3 e 5 é ${result}`;
  }
}

console.log(findDivisibleBy3And5(numbers))

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  // Adicione seu código aqui:
  const result = array.find((item) => item.length === 5);
  if (!result) {
    return `Não existe nenhum nome com 5 letras`;
  } else {
    return `O primeiro nome com 5 letras é ${result}`;
  }
}

console.log(findNameWithFiveLetters(names));

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const result = musicas.find((item) => item.id === id);
  if (!result) {
    return `Não existe nenhuma música com esse id`;
  } else {
    return `A música com id ${id} é ${result.title}`;
  }
}

console.log(findMusic('31031685'))