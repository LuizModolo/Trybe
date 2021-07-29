let angA = 60
let angB = 60
let angC = 60
angC = 180
angB = 40
angA = -40

if (angA < 0 || angB < 0 || angC < 0){
    console.log ('error');
} else if (angA + angB + angC !== 180) {
    console.log ('false');
} else if (angA + angB + angC === 180) {
    console.log ('true');
} else {
    console.log ('fail')
}