let numA = 77
let numB = 55
let numC = 62
numA = 42
numC = 42
numB = 42


if (numA > numB && numA > numC){
    console.log (numA);
} else if (numB > numA && numB > numC) {
    console.log (numB);
} else if (numC > numA && numC > numB) {
    console.log (numC);
} else {
    console.log (numA)
}