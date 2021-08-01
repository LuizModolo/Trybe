// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let space = "";

for (let index = 1 ; index <= n ; index += 1){
    for (let line = 0; line < n - index; line += 1){
    space += " ";
    } 
    for (let line = 0; line < index ; line += 1){
    space += "*";
    }
    console.log(space)
    space = "";
}
