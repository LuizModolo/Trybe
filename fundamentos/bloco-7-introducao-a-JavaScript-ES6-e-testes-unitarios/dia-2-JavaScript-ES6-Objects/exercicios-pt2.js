const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurn = (obj, chave, valor) => {
  const lessonX = {
    chave: valor,
  }
  Object.assign(obj, lessonX)
  return lesson2
}
console.log(addTurn(lesson2, 'turno', 'manhã'))

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = obj => Object.keys(obj);
console.log(listKeys(lesson3))

// 3. Crie uma função para mostrar o tamanho de um objeto.

const checkSize = obj => Object.keys(obj);
console.log(checkSize(lesson3).length)

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = obj => Object.values(obj);
console.log(listValues(lesson3))

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

// const createAllLessons = (obj1, obj2, obj3) => {
//   const allLessons = {
//     lesson1: {
  
//     },
//     lesson2: {
  
//     },
//     lesson3: {
  
//     }
//   };
  
//   allLessons.lesson1 = Object.assign(allLessons.lesson1, obj1);
//   allLessons.lesson2 = Object.assign(allLessons.lesson2, obj2);
//   allLessons.lesson3 = Object.assign(allLessons.lesson3, obj3);

//   return allLessons
// }
// console.log(createAllLessons(lesson1, lesson2, lesson3));

const allLessons = {
  lesson1: {

  },
  lesson2: {

  },
  lesson3: {

  }
};

allLessons.lesson1 = Object.assign(allLessons.lesson1, lesson1);
allLessons.lesson2 = Object.assign(allLessons.lesson2, lesson2);
allLessons.lesson3 = Object.assign(allLessons.lesson3, lesson3);
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const studentSum = () => {
//   for (let index in allLessons) {
//     console.log(index);
//   }
// }
// console.log(studentSum());

const studentSum = () => {
  const studentsOne = Object.values(allLessons.lesson1)[1];
  const studentsTwo = Object.values(allLessons.lesson2)[1];
  const studentsTree = Object.values(allLessons.lesson3)[1];
  const totalStudents = studentsOne + studentsTwo + studentsTree;
  return totalStudents;
}

console.log(studentSum());

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (obj, index) => {
  return Object.values(obj)[index];
}

console.log(getValueByNumber(lesson2, 2));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, chave, valor) => {
  const completeObject = Object.entries(obj);
  let result = null;
  for (let i = 0; i < completeObject.length; i += 1) {
    if (completeObject[i][0] === chave && completeObject[i][1] === valor) {
      result = true
    } else {
      result = false
    }
  }
  return result
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
