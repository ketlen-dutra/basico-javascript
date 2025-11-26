// Programa revenda

//adiciona o pacote ao programa
const prompt = require("prompt-sync")()

//lê os dados de entrada
const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))

//calcula valor da entrada
const entrada = preco * 0.50
//calcula parcela
const parcela = (preco * 0.50) / 12

//exibe as respotas
console.log(`Veículo em promoção: ${veiculo}`)
console.log(`Valor da entrada: R$ ${entrada.toFixed(2)}`)
console.log(`+ 12x de: R$ ${parcela.toFixed(2)}`)