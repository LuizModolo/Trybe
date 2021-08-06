// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// - Atente que, sobre o custo do produto, incide um imposto de 20%.

// - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//     - valorCustoTotal = valorCusto + impostoSobreOCusto
//     - lucro = valorVenda - valorCustoTotal (lucro de um produto)

let valorCusto = -1000;
let valorVenda = 2600;
// Valor custo total é o valor do custo + 20% de imposto.
let valorCustoTotal = valorCusto * 1.2;
let lucro = valorVenda - valorCustoTotal;
// lucro positive é o módulo do lucro, para resposta do console.log
let lucropositive = Math.abs(lucro);

if (valorVenda < valorCustoTotal){
    console.log ('você está vendendo com prejuizo de ' + lucropositive + ' por operação.');
} else if (valorCusto >= 0 || valorVenda >= 0){
    console.log ('seu lucro é de ' + lucro + ' por operação.');
} else {
    console.log ('Valores negativos proíbidos. Programa encerrado.');
}