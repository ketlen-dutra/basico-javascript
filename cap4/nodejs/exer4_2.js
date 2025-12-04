/**
 * b) Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
 * Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. 
 * Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. 
 * E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” – 
 * conforme ilustra a Figura 4.8.
 */

//feito em node com if...else tradicional

const prompt = require("prompt-sync")()

const limite = Number(prompt("Informe a velocidade permitida: "))
const condutor = Number(prompt("Informe a velocidade do condutor: "))

if(condutor <= limite) {
    console.log(`Situação: Sem Multa.`)
}else {
    const calculo = limite * 1.20
    if(condutor <= (calculo)) {
        console.log(`Situação: Multa Leve.`)
    }else {
        console.log(`Situação: Multa Grave.`)
    }
}