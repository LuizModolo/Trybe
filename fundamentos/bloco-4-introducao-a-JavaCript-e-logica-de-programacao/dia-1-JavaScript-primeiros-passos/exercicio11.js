// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// Regras
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salBruto = 12000;
let salBase;
let salFinal;

// INSS
let inss1 = 0.92;
let inss2 = 0.91;
let inss3 = 0.89;
let inss4 = 570.88;

// console.log (inss1)
// console.log (inss2)
// console.log (inss3)
// console.log (inss4)
// console.log (salBruto - inss1)
// console.log (salBruto - inss2)
// console.log (salBruto - inss3)
// console.log (salBruto - inss4)

if (salBruto <= 1556.94){
  salBase = salBruto * inss1;
} else if (salBruto > 1556.94 && salBruto <= 2594.92){
  salBase = salBruto * inss2;
} else if (salBruto > 2594.92 && salBruto <= 5189.82){
  salBase = salBruto * inss3;
} else if (salBruto > 5189.82){
  salBase = salBruto - inss4;
} else {
  console.log ('Erro, salário não pode ser negativo!');
}

// IR
let salLiq1 = (salBase * 0.075) - 142.80;
let salLiq2 = (salBase * 0.15) - 354.80;
let salLiq3 = (salBase * 0.225) - 636.13;
let salLiq4 = (salBase * 0.275) - 869.36;

if (salBase <= 1903.98){
  salFinal = salBase;
} else if (salBase > 1903.98 && salBase <= 2826.65){
  salFinal = salBase - salLiq1;
} else if (salBase > 2826.65 && salBase <= 3751.05){
  salFinal = salBase - salLiq2;
} else if (salBase > 3751.05 && salBase <= 4664,68){
  salFinal = salBase - salLiq3;
} else if (salBase > 4664.68){
  salFinal = salBase - salLiq4;
} else {
  salFinal = 'Erro, salário final não pode ser negativo!';
}

console.log (salFinal);