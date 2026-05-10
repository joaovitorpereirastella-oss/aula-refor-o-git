const input = require("readline-sync")

let numero = input.questionInt("digite um numero: ")

    if (numero % 2 === 0){
        console.log(`${numero} é par`)
    } else {
        console.log(`${numero} é impar`)
    }
