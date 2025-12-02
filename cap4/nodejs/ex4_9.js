/**
 * c) Elaborar um programa que leia um número – que deve ser uma centena. 
 * Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem.
 */

const prompt = require("prompt-sync")()

const entrada = Number(prompt("Insira um número: "))

if(entrada < 100 || entrada >= 1000) {
    console.log(`Erro...Digite uma centena`)
    return
}

const num1 = Math.floor(entrada / 100)
const sobra = entrada % 100
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10

console.log(`Invertido: ${num3}${num2}${num1}`)