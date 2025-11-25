//programa soma dois números

//adiciona pacotes para entrada de dados
const prompt = require("prompt-sync")()

//lê os números
const num1 = Number(prompt("1° Número: "))
const num2 = Number(prompt("2° Número: "))

//calcula soma
const soma = num1 + num2

//exibe o resultado
console.log(`Resulta da soma: ${soma}`)