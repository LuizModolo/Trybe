// 4- Depois, faça uma pirâmide com n asteriscos de base:

let baseFig = 7;
let string = "";
let asterisk;
let altura;

if (baseFig %2 !== 0){
    asterisk = 1;
    altura = (baseFig + 1)/2
} else {
    asterisk = 2
    altura = baseFig/2
}

for (let index = 0 ; index < altura ; index += 1){
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
    asterisk += 2
}