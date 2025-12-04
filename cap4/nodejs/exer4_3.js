/**
 * c) Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um 
 * terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local 
 * e o troco (se existir), como no exemplo da Figura 4.9. Se o valor for inferior ao tempo mínimo, 
 * exiba a mensagem: “Valor Insuficiente”. Considerar os valores/tempos da Tabela 4.6 (o máximo é 120 min).
 * Valor R$   |   Tempo (min)
 * 1,00       |  30
 * 1,75       |  60
 * 3,00       |  120
 */

//feito em node com if...else tradicional

const prompt = require("prompt-sync")()

const deposito = Number(prompt("Digite o valor: "))

if(deposito < 1.00) {
    console.log(`Valor Insuficente`)
    return
}

let troco
let permanencia

if (deposito >= 3.00) {
    troco = deposito - 3.00
    permanencia = 120

} else if (deposito >= 1.75) {
    troco = deposito - 1.75
    permanencia = 60

}
else {
    troco = deposito - 1.00
    permanencia = 30
}

console.log(`Tempo: ${permanencia} min`)

if(troco > 0) {
console.log(`Troco: R$ ${troco.toFixed(2)}`)
}
