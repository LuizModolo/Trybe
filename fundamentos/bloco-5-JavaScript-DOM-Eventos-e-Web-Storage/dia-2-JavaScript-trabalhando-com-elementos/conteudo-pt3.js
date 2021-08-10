let elementoInicial = document.getElementById('elementoOndeVoceEsta');
let elementoPai = elementoInicial.parentElement;
let primeiroFilhoDoFilho = elementoInicial.firstElementChild;

// 1. Crie um irmão para elementoOndeVoceEsta .
let quintoFilho = document.createElement('section');
elementoPai.appendChild(quintoFilho);
quintoFilho.id = 'quintoFilho';

// 2. Crie um filho para elementoOndeVoceEsta .
let terceiroFilhoDoFilho = document.createElement('section');
elementoInicial.appendChild(terceiroFilhoDoFilho);
terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho';

// 3. Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);
primeiroFilhoDoFilhoDoFilho.id = 'primeiroFilhoDoFilhoDoFilho';

// 4. A partir desse filho criado, acesse terceiroFilho.
primeiroFilhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling

// 5. Exercício da parte 3.
//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

elementoPai.removeChild(elementoPai.firstElementChild);
elementoPai.removeChild(elementoPai.firstElementChild.nextElementSibling);
elementoPai.removeChild(elementoPai.firstElementChild.nextElementSibling);
elementoPai.removeChild(elementoPai.lastElementChild);

elementoInicial.removeChild(elementoInicial.lastElementChild);
elementoInicial.removeChild(elementoInicial.lastElementChild);

primeiroFilhoDoFilho.removeChild(primeiroFilhoDoFilho.firstElementChild);