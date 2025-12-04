/**
 * d) Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. 
 * Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. 
 * Caso possam formar um triângulo, exiba também qual o tipo do triângulo: 
 * Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes). 
 * A Figura 4.10 exibe um exemplo de execução do exercício.
 */

//feito em node com if...else tradicional

const prompt = require("prompt-sync")()

const ladoA = Number(prompt(`1° Lado: `))
const ladoB = Number(prompt(`2° Lado: `))
const ladoC = Number(prompt(`3° Lado: `))

if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    console.log(`Os lados não formam um triângulo`)
}else {
    console.log(`Os lados formam um triângulo`)
    if(ladoA == ladoB && ladoA == ladoC) {
        console.log(`Tipo: Equilátero`)
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log(`Tipo: Isósceles`)
    }else {
        console.log(`Tipo: Escaleno`)
    }
}


