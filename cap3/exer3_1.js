/**
 * a) Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário 
 * trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo 
 * de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito 
 * e o salário final.
 */

const prompt = require("prompt-sync")()

const salario = Number(prompt("Informe o salário atual: "))
const tempo = Number(prompt("Informe os anos de empresa: "))

const calculo = Math.floor(tempo / 4)
const salarioAtual = calculo * salario / 100

console.log(`Quadriênios: ${calculo}`)
console.log(`Salário final: R$ ${(salario + salarioAtual).toFixed(2)}`)