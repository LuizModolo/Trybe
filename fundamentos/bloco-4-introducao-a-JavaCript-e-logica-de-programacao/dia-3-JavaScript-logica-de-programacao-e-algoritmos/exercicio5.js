// // 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

//   *
//  * *
// *   *
//*******

let baseFig = 11;
let string = "";
let asterisk = 1;
let altura = (baseFig + 1)/2;
let space2 = 1;
let miolo = altura - 2

for (let index = altura - 1 ; index < altura ; index += 1){
    let space = baseFig - asterisk;
    for (let line = 0; line < space/2; line += 1){
    string += " ";
    } 
    for (let line = 0; line < asterisk ; line += 1){
    string += "*";
    }
    for (let line = 0; line < space/2; line += 1){
    string += " ";
    }
    console.log(string)
    string = "";
}
for (let index = altura - miolo ; index < altura ; index += 1){
    let space3 = baseFig - ((2 * asterisk) + space2);
    for (let line = 0; line < space3/2; line += 1){
    string += " ";
    } 
    for (let line = 0; line < asterisk ; line += 1){
    string += "*";
    }
    for (let line = 0; line < space2; line += 1){
    string += " ";
    } 
    for (let line = 0; line < asterisk ; line += 1){
    string += "*";
    }
    for (let line = 0; line < space3/2; line += 1){
    string += " ";
    }
    console.log(string)
    space2 += 2;
    string = "";
}
for (let index = altura - 1 ; index < altura ; index += 1){
    for (let line = 0; line < baseFig; line += 1){
    string += "*";
    }
    console.log(string)
}
