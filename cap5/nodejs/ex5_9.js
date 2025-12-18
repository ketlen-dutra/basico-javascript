/**
 * b) Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. 
 * Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha, 
 * conforme exemplo de execução do programa, demonstrado a seguir.
 */

const prompt = require("prompt-sync")()

const produto = prompt("Digite o nome do produto: ")
const qtd = Number(prompt("Quantidade de etiquetas: "))

//cria um laço de repetição até qtd/2 (pois imprime 2 etiquetas por linha)
for(let i = 1; i <= qtd / 2; i++) {
    console.log(`${produto.padEnd(30,"-")} ${produto.padEnd(30)}`)
}
if(qtd % 2 == 1) {  //se a quantidade de etiquetas por ímpar
    console.log(produto)  //então imprime mais um número
}