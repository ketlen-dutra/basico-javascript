const prompt = require("prompt-sync") ()

const carros = []

carros.push({modelo: "Sandero", preco: 46500})
carros.push({modelo: "Palio", preco: 37800})

for(const carro of carros) {
    console.log(`${carro.modelo} - R$ ${carro.preco}`)
}

/*Um detalhe na atribuição de dados de um objeto em JavaScript é que, 
se o nome da variável for igual ao do atributo, pode-se omitir a atribuição. Observe o exemplo:
*/

const frutas = []

const nome = "Laranja"
const valor = 5.75

frutas.push({nome,valor})   //ou frutas.push({modelo: modelo, preco: preco})

for(const fruta of frutas) {
    console.log("-".repeat(20))
    console.log(`${fruta.nome} - R$ ${fruta.valor}`)
}