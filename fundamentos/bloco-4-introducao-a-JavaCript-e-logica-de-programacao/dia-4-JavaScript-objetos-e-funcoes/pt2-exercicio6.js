// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function soma(num1){
    let numBase = 0
    for (index = 1; index <= num1; index += 1){
        numBase += index;
    }
    return numBase;
}

console.log(soma(5))