const input = require("readline-sync");

let a = input.questionInt("Digite o primeiro numero: ");
let b = input.questionInt("Digite o segundo numero: ");

console.log("soma = " + (a + b) )
console.log("subtração = " + (a - b))
console.log("multiplicação  = " + (a * b))
if (b === 0){
    console.log("nao tente brincar com a minha cara")
} else{
    console.log("divisão = " + (a/b))
}