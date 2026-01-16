const prompt = require("prompt-sync")()

//exemplo com map()

const numeros = [10,13,20,8,15]  //vetor inicial

const dobros = numeros.map(num => num * 2) //cada número é obtido e multiplicado por 2, criando um novo array

console.log(dobros.join(","))
console.log("-".repeat(30))

//exemplo map() com arrays de objetos

const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}]

const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2026 - aux.idade}))

for(const amigo of amigos2) {
    console.log(`${amigo.nome} - Nasceu em: ${amigo.nasc}`)
}

//exemplo com método filter()

const inicial = [10,13,20,8,15]  //vetor inicial

const pares = inicial.filter(calculo => calculo % 2 == 0)  //condição para o filtro

console.log("-".repeat(30))
console.log(pares.join(',')) 

//exemplo de filter() com array de objetos
//os amigos com idade superior ou igual a 21 anos ou que contenham a letra B no nome são selecionados.

const pessoas = [{nome: "Ana", idade: 20},
                 {nome: "Bruno", idade: 17},
                 {nome: "Cátia", idade: 25}]

const pessoas2 = pessoas.filter(aux => aux.idade >= 21 || aux.nome.includes("B"))

console.log("-".repeat(30))

for(const pessoa of pessoas2) {
    console.log(`Nome: ${pessoa.nome} - Idade: ${pessoa.idade} anos`)
}

//Exibir mensagem indicando que o filtro não obteve registros que atendam ao critério de pesquisa
//Como um novo array é gerado, basta verificar se ele está vazio, com o seguinte código:

if(pessoas2.length == 0) {
    console.log("Não há registros com essas condições")
}

//exemplo com método reduce()

const inteiros = [10,13,20,8,15]

const soma = inteiros.reduce((acumulador,inteiros) => acumulador + inteiros, 0)

console.log("-".repeat(30))
console.log(`Soma: ${soma}`)

//exemplo de reduce() com array do objetos

const alunos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}]

const somaIdades = alunos.reduce((acumulador, aluno) => acumulador + aluno.idade, 0)
const todos = alunos.reduce((acumulador, aluno) => acumulador + aluno.nome + " ", "")

console.log("-".repeat(30))
console.log(`Soma idades: ${soma}`)
console.log(`Todos: ${todos}`)

//O trecho de código a seguir recupera o maior valor contido no array.

const valores = [10,13,20,8,15]

const maior = valores.reduce((a,b) => Math.max(a,b),0)

console.log("-".repeat(30))
console.log(`Maior: ${maior}`)