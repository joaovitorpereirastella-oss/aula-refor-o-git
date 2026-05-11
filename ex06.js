const input = require("readline-sync")

let numero = input.questionInt("digite o numero secreto: ")
if (numero === 42){
    console.log("parabens, voce acertou o numero secreto")
} else if (numero < 42) {
    console.log("você errou, o numero secreto é maior")
} else {
    console.log("você errou, o numero secreto é menor")
}