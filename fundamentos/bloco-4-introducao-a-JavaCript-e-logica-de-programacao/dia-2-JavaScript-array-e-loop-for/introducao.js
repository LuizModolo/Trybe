// Array
// 1. Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// 2. Procure o índice do valor "Portfólio" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf ('Portfólio');

console.log(indexOfPortfolio);

// 3. Adicione o valor "Contato" no final do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push ('Contato');

console.log(menu);

// For
// 1. Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

// For
// 1. Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
    console.log (nome)
}