/**
 * b) Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome 
 * por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).
 */

const prompt = require("prompt-sync")()

const pesoRacao = Number(prompt("Informe o peso da ração (Kg): "))
const consumoGato = Number(prompt("Informe o consumo por dia (gr): "))

const duracao = Math.floor((pesoRacao * 1000) / consumoGato)
const sobra = (pesoRacao * 1000) % consumoGato

console.log(`Duração em dias: ${duracao} dias`)
console.log(`Quanto sobra em gramas: ${sobra}gr`)