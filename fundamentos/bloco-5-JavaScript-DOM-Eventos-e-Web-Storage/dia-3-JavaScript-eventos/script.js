function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function createDaysMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const monthDaysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let days2 = dezDaysList[i];
    let dayListItem2 = document.createElement('li');
    dayListItem2.innerHTML = days2;
    monthDaysList.appendChild(dayListItem2);

    if (days2 === 24 || days2 === 31) {
      dayListItem2.className = 'day holiday';
    } else if (days2 === 4 || days2 === 11 || days2 === 18) {
      dayListItem2.className = 'day friday';
    } else if (days2 === 25) {
      dayListItem2.className = 'day friday holiday';
    } else {
      dayListItem2.className = 'day';
    }
  }
  
}
createDaysMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtonHoliday(string) {
  let buttonDiv = document.querySelector('.buttons-container');
  let buttonFeriados = document.createElement('button');
  buttonFeriados.innerHTML = string;
  buttonDiv.appendChild(buttonFeriados);
  buttonFeriados.id = 'btn-holiday'
}
createButtonHoliday('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let buttonFeriados = document.querySelector('#btn-holiday'); 
let holidayDays = document.querySelectorAll('.holiday');

function changeColorButton (event) {
  for (i = 0; i < holidayDays.length; i += 1) {
    if (holidayDays[i].style.backgroundColor != 'red') {
      holidayDays[i].style.backgroundColor = 'red';
    } else {
      holidayDays[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

buttonFeriados.addEventListener('click', changeColorButton);

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtonFriday(string) {
  let buttonDiv = document.querySelector('.buttons-container');
  let buttonSexta = document.createElement('button');
  buttonSexta.innerHTML = string;
  buttonDiv.appendChild(buttonSexta);
  buttonSexta.id = 'btn-friday'
}
createButtonFriday('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

let buttonSexta = document.querySelector('#btn-friday'); 
let fridayDays = document.querySelectorAll('.friday');
let fridayArray = [4, 11, 18, 25];

function changeColorButton2 (event) {
  for (i = 0; i < fridayDays.length; i += 1) {
    if (fridayDays[i].innerText != 'SEXTOU!') {
      fridayDays[i].innerText = 'SEXTOU!';
    } else {
      fridayDays[i].innerText = fridayArray[i];
    }
  }
}
buttonSexta.addEventListener('click', changeColorButton2);