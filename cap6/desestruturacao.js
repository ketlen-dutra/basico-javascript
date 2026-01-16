const prompt = require("prompt-sync")()

//desestruturação de objeto
const roupas = []

roupas.push({tamanho: "P", preco: 79.90})

for(const roupa of roupas) {
    const {tamanho, preco} = roupa  //"desestrutura" o objeto carro em modelo e preco

    console.log(`${tamanho} - R$ ${preco}`)
    console.log("-".repeat(30))
}

//desestruturação para obter elementos de um array
const pacientes = ["Ana","Carlos","Sofia"]

const[a,b,c] = pacientes

console.log(a)  //Ana
console.log(b)  //Carlos
console.log(c)  //Sofia

//Também se pode desestruturar os elementos de um vetor com uma parte dele sendo atribuída a variáveis 
// e outra parte a um outro vetor.

const clientes = ["Ana","Bruno","Carlos","Maria"]

const [atender, proximo,...outros] = clientes

console.log("-".repeat(30))
console.log(atender) //Ana
console.log(proximo) //Bruno
console.log(outros) //Carlos e Maria

//Os “...” também podem ser utilizados com uma ideia de “espalhar” os elementos de um array ou objeto 
// – neste caso, recebendo a denominação de operador Spread.

const carro = {modelo:"Corsa", preco: 59500}
const carro2 = {...carro, ano: 2020}

console.log("-".repeat(30))
console.log(carro2)

//E em aplicações sobre vetores, oferecendo uma forma alternativa para realizar inclusões de elementos no array.

let elementos = ["João","Sofia"]

elementos = ["Ana",...elementos] //acrescenta Ana ao início do vetor

elementos = [...elementos, "Maria"]

console.log("-".repeat(30))
console.log(elementos)

//O operador Spread também pode ser utilizado para criar uma cópia com os elementos de um vetor 
// e, dessa forma, tem um comportamento semelhante ao método slice() – sem parâmetros, discutido anteriormente

const elementos2 = [...elementos] //ou const elementos2 = elementos.slice()

console.log(elementos2)