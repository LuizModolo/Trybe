new JustValidate('.js-form', {
	submitHandler: createParagraph
});

const regEx = /^\d*$/; // Regular Expression para números inteiros
const regExCpf = /(?!(\d)\1{2}.\1{3}.\1{3}-\1{2})\d{3}\.\d{3}\.\d{3}\-\d{2}/

    function mostraErros() {
      alert('Formulário com erros!');
    }

    function mostraSucesso() {
      alert('Formulário preenchido com sucesso!');
    }

    // Objeto para regras
    const rules = {
      rules: {
        num: {
          required: true,
          strength: {
            custom: regEx
          }
        },
				cpf: {
					required: true,
					maxLength: 15,
          strength: {
            custom: regExCpf
          }
				},
				text2: {
					required: true,
					maxLength: 200
				},
				text3: {
					required: true,
					maxLength: 28
				},
				text4: {
					required: true,
					maxLength: 1000
				},
				text5: {
					required: true,
					maxLength: 40
				},
				text6: {
					required: true,
					maxLength: 500
				},
      },
      messages: {
        num: {
          strength: 'Apenas números'
        },
				cpf: {
          strength: 'Utilize um CPF válido.'
        }
      },
      focusWrongField: true,
      submitHandler: mostraSucesso,
      invalidFormCallback: mostraErros
    }


    // Aplicando regras da biblioteca ao formulário e objeto com regras customizadas
    new JustValidate('form', rules);

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

function validateAll() {
	createParagraph();
}

function clearAll () {
	const inputsElements = document.querySelectorAll('input');
	const textAreaElements = document.querySelector('textarea');
	const estadoSelected = document.querySelector('#estado-selecionado');
	for (let i = 0; i < inputsElements.length; i += 1) {
		inputsElements[i].value = '';
		textAreaElements.value = '';
	}
	estadoSelected.selected = true;
}

window.onload = function () {
	createState();
	// let hoouseUser = document.getElementById('house-user')
	// const submitButton = document.getElementById('submit-button');
	// submitButton.addEventListener('click', validateAll);
	const estadoSelected = document.querySelector('#estado-selecionado');
	estadoSelected.selected = true;

	const clearButton = document.getElementById('clear-button');
	clearButton.addEventListener('click', clearAll);
}
