// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 7;
let space = "";
let z;
let altura;

if (n %2 !== 0){
    z = 1;
    altura = (n + 1)/2
} else {
    z = 2
    altura = n/2
}

for (let index = 0 ; index < altura ; index += 1){
    let y = n - z;
    for (let line = 0; line < y/2; line += 1){
    space += " ";
    } 
    for (let line = 0; line < z ; line += 1){
    space += "*";
    }
    for (let line = 0; line < y/2; line += 1){
    space += " ";
    }
    console.log(space)
    space = "";
    z += 2
}