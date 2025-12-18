/**
 * c) Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja 
 * parcelar esse valor (em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais 
 * não tenham centavos, ou seja, centavos apenas na última parcela. 
 * Informe como resposta o valor de cada parcela, considerando essa situação.
 */

const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor R$: "))
const qtd = Number(prompt("Quantidade de parcelas: "))

const valorParcelas = Math.floor(valor / qtd)
const valorFinal = valorParcelas + (valor % qtd)

for(i = 1; i < qtd; i++) {
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${qtd}º parcela: R$ ${valorFinal.toFixed(2)}`)