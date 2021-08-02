// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5;
let string = "";

for (let line = 0; line < n; line += 1){
 string += "*";
}
for (let repeat = 0; repeat < n; repeat += 1){
  console.log (string)
}