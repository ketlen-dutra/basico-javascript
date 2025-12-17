/**
 * a) A Copa do Mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 
 * (Segunda Guerra Mundial). Construir um programa que repita a leitura de números (anos) 
 * até ser digitado 0. Informe para cada ano se ele é ou não ano de Copa do Mundo.
 */

const prompt = require("prompt-sync")()

console.log("Programa ano de Copa. Digite 0 para sair.")
console.log("-----------------------------------------")
do{
    const ano = Number(prompt("Digite um ano: "))
    if(ano == 0) {
        break
    }else if(ano == 1942 || ano == 1946) {
        console.log(`Não houve copa em ${ano} por conta da 2° guerra.\n`)

    }else if(ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é ano de copa do mundo\n`)
        
    }else {
        console.log(`Não! ${ano} não é ano de copa\n`)
        
    }
}while(true)
    console.log("Bye Bye!")