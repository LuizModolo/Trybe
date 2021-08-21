function createState() {
  let states = document.getElementById('state-user');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < stateOptions.length; i += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[i];
    states.appendChild(createOptions).value = stateOptions[i];
  }
}

function validateDate(string) {
	if (string[2] === '/' && string[5] === '/') {
		return true;
	} else {
		return false;
	}
}

function validateDay(string) {
  if ((string[0] + string[1]) > 00 && (string[0] + string[1]) <= 31) {
    return true;
  } else {
    return false;
  }
}

function validateMonth(string) {
  if ((string[3] + string[4]) > 00 && (string[3] + string[4]) <= 12) {
    return true;
  } else {
    return false;
  }
}

function validateYear(string) {
	if ((string[6] + string[7] + string[8] + string[9]) > 00) {
		return true;
	} else {
		return false;
	}
}

function validateDateFull() {
	const dataField = document.getElementById('date-user');
	const valorElemento = dataField.value
	let result;
	if (!validateDate(valorElemento)) {
		result = alert('Favor inserir uma data válida');
	} else if (!validateDay(valorElemento)) {
		result = alert('Favor inserir um dia válido');
	} else if (!validateMonth(valorElemento)) {
		result = alert('Favor inserir um mês válido');
	} else if (!validateYear(valorElemento)) {
		result = alert('Favor inserir um ano válido');
	} else {
		result = valorElemento;
	}
	return result;
}

function validateName (nameString) {
	const arrayName = nameString.split('');
	if (arrayName.length > 0 && arrayName.length <= 40) {
		return true
	} 
	return false
}

function validateEmail (emailString) {
	const arrayEmail = emailString.split('');
	if (!arrayEmail.includes('@')) {
		return false
	} 
	if (arrayEmail.length > 0 && arrayEmail.length <= 50) {
		return true
	} 
}

function validateCPF (cpfString) {
	const arrayCPF = cpfString.split('');
	if (arrayCPF.length != 11) {
		return false
	} else {
		return true
	}
}

function validateAdress (adressString) {
	const arrayAdress = adressString.split('');
	if (arrayAdress.length > 0 && arrayAdress.length <= 200) {
		return true
	} else {
		return false
	}
}

function validateCity (cityString) {
	const arrayCity = cityString.split('');
	if (arrayCity.length > 0 && arrayCity.length <= 28) {
		return true
	} else {
		return false
	}
}

function validateFirstInfos() {
	const nameString = document.getElementById('name').value;
	const emailString = document.getElementById('email-user').value;
	const cpfString = document.getElementById('cpf-user').value;
	const adressString = document.getElementById('adress-user').value;
	const cityString = document.getElementById('city-user').value;
	let result;
	if (!validateName (nameString)) {
		result = alert('Favor inserir uma nome.');
	} else if (!validateEmail (emailString)) {
		result = alert('Favor inserir um email.');
	} else if (!validateCPF (cpfString)) {
		result = alert('Favor inserir um CPF.');
	} else if (!validateAdress (adressString)) {
		result = alert('Favor inserir um endereço.');
	} else if (!validateCity (cityString)) {
		result = alert('Favor inserir uma cidade.');
	} else {
		result = true;
	}
	return result;
}

function validateResum (resumString) {
	const arrayResum = resumString.split('');
	if (arrayResum.length > 0 && arrayResum.length <= 1000) {
		return true
	} else {
		return false
	}
}

function validateJob (jobString) {
	const arrayJob = jobString.split('');
	if (arrayJob.length > 0 && arrayJob.length <= 500) {
		return true
	} else {
		return false
	}
}

function validateJobDisc (jobDiscString) {
	const arrayJobDisc = jobDiscString.split('');
	if (arrayJobDisc.length > 0 && arrayJobDisc.length <= 500) {
		return true
	} else {
		return false
	}
}

function validateSecondInfos() {
	const resumString = document.getElementById('resum-user').value;
	const jobString = document.getElementById('job-user').value;
	const jobDiscString = document.getElementById('jobdisc-user').value;
	let result;
	if (!validateResum (resumString)) {
		result = alert('Favor inserir uma resumo do currículo.');
	} else if (!validateJob (jobString)) {
		result = alert('Favor inserir um cargo.');
	} else if (!validateJobDisc (jobDiscString)) {
		result = alert('Favor inserir uma descrição do cargo.');
	} else {
		result = true;
	}
	return result;
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
	if (!validateFirstInfos()) {
		return;
	}
	if (!validateSecondInfos()) {
		return;
	}
	if (!validateDateFull()) {
		return;
	}
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
