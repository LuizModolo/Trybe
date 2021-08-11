// 1. Acesse o elemento elementoOndeVoceEsta .
let elementoInicial = document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let elementoPai = elementoInicial.parentElement;

elementoPai.style.color = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let primeiroFilhoDoFilho = elementoInicial.firstElementChild;

primeiroFilhoDoFilho.textContent = 'Texto destinado ao primeiro filho do elemento inicial.';

// 4. Acesse o primeiroFilho a partir de pai .
elementoPai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
elementoInicial.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
elementoInicial.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
elementoInicial.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai .
elementoPai.lastElementChild.previousElementSibling