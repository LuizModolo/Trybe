// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let string = "";

for (let index = 1 ; index <= n ; index += 1){
    for (let space = 0; space < n - index; space += 1){
    string += " ";
    } 
    for (let asterisk = 0; asterisk < index ; asterisk += 1){
    string += "*";
    }
    console.log(string)
    string = "";
}
