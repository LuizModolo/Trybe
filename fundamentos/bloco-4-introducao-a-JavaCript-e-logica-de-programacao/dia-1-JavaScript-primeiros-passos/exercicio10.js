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