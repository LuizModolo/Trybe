// Parte 1 Variáveis

const myName = "Luiz Fernando Christianini Módolo";
const birthCity = "Campinas";
// birthCity = 'Americana';
let birthYear = 1988;
birthYear = 2030

console.log(myName);
console.log(birthCity);
console.log(birthYear);

console.log(birthYear);

console.log(birthCity);

// Parte 2 Tipos Primitivos e Operações

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

let base = 5;
let altura = 8;

let area = base * altura;

console.log(area);

let perimetro = 2 * base + 2 * altura;

console.log(perimetro);

// Parte 3 If e Else

let nota1 = 77;
nota1 = 97;
nota1 = 57;

if (nota1 >= 80){
  console.log('Parabéns, você foi aprovado!');
} else if (nota1 < 80 && nota1 >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovado.');
}

// Parte 4 Switch e Case

let status = 'aprovada';
status = 'lista';
status = 'reprovada';

switch (status) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovado!');
    break;

  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

  case 'reprovada':
    console.log('Você foi reprovado.');
    break;

  default:
    console.log('não se aplica');
}