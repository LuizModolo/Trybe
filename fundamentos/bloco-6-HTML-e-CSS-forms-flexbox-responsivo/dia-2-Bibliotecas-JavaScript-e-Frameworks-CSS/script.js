function createState() {
  let states = document.getElementById('state-user');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < stateOptions.length; i += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[i];
    states.appendChild(createOptions).value = stateOptions[i];
  }
}

function selectedOption(event) {
	const alvo = event.target;
	const houseUser = document.querySelectorAll('#house-user')
	for (let i = 0; i < houseUser.length; i += 1) {
	  houseUser[i].classList.remove('selecionado');
	  alvo.classList.add('selecionado');
	}
}

const houseUser = document.querySelectorAll('#house-user')
for (let i = 0; i < houseUser.length; i += 1) {
	houseUser[i].addEventListener('click', selectedOption);
}

function createParagraph () {
	let resultTag = document.querySelectorAll('.result')
	let resultTitleTag = document.querySelectorAll('.result-title');
	let x = document.querySelector('.selecionado')
	let formTag = document.querySelector('form');
	let answer = '';
	let createP = document.createElement('p');
	for (let i = 0; i < resultTitleTag.length; i += 1) {
		answer += resultTitleTag[i].innerText + ' ' + resultTag[i].value + '\n'
	}
	answer += 'Tipo do imóvel' + ' ' + x.value + '\n'
	createP.innerText = answer;
	formTag.appendChild(createP);
}

function validateAll(event) {
	event.preventDefault();
	createParagraph();
}

function clearAll () {
	const inputsElements = document.querySelectorAll('input');
	const textAreaElements = document.querySelector('textarea')
	for (let i = 0; i < inputsElements.length; i += 1) {
		inputsElements[i].value = '';
		textAreaElements.value = '';
	}
}

window.onload = function () {
	createState();
	let hoouseUser = document.getElementById('house-user')
	const submitButton = document.getElementById('submit-button');
	submitButton.addEventListener('click', validateAll);

	const clearButton = document.getElementById('clear-button');
	clearButton.addEventListener('click', clearAll);
}
