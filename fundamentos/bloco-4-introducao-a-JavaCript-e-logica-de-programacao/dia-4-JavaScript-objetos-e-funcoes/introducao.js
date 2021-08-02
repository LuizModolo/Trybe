// Parte 1 - Objetos
// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2, 
    silver: 3, 
  },
}

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(player.bestInTheWorld)

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

for (let index in player.medals) {
  console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')
}

// Parte 2 - For/In
// 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let index in names) {
  console.log('Olá ' + names[index] + '!')
}

// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (index in car){
  console.log(index, car[index])
}

// Parte 3 - Funções
// Que tal praticar um pouco?
// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 10
let b = 8

function sum(num1, num2){
  return num1 + num2
}
function sub(num1, num2){
  return num1 - num2
}
function multip(num1, num2){
  return num1 * num2
}
function division(num1, num2){
  return num1 / num2
}
function module(num1, num2){
  return num1 % num2
}

console.log(sum(a, b), sub(a, b), multip(a, b), division(a, b), module(a, b))

function calculator(num1, num2, operator){
  if (operator === '+'){
    return num1 + num2;
  } else if (operator === '-'){
    return num1 - num2;
  } else if (operator === '*'){
    return num1 * num2;
  } else if (operator === '/'){
    return num1 / num2;
  } else if (operator === '%'){
    return num1 % num2;
  } else {
    return 'error'
  }
}

console.log(calculator(a, b, "+"))

// 2 e 3. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function max(a, b, c){
  if (a > b && a > c){
    return a
  } else if (b > a && b > c) {
    return b
  } else if (c > b && c > a){
    return c
  } else {
    return 'Os maiores números são iguais!';
  }
}

console.log(max(77, 77, 32))


