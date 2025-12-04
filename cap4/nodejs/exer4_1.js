/**
 * a) Elaborar um programa que leia um número. Informe se ele é par ou ímpar. 
 * Faça com o if... else... tradicional e, após, tente criar a condição com o operador ternário. 
 * A Figura 4.7 ilustra a tela de execução do programa. Para os exercícios, foi utilizada uma figura padrão, 
 * mas você pode substituí-la caso tenha interesse.
 */

//feito em node com if...else tradicional

const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número: "))

const calculo = numero % 2

if(calculo == 0) {
    console.log(`Número: ${numero}. É par!`)
}else {
    console.log(`Numero: ${numero}. É ímpar!`)
}