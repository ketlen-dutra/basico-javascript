/*
exemplos com a propriedade length e métodos repeat(), toString(), join()
*/

const prompt = require("prompt-sync")()

const cidades = ["Pelotas","São Lourenço","Porto Alegre"]
    /*for(let i = 0; i < cidades.length; i++) {
        console.log(cidades[i])
    }*/

    /*exemplo com for...of
    for(const cidade of cidades) {
        console.log(cidade)
    }*/
    cidades.forEach((cidade,i) => {
        console.log(`${i+1}ª Cidade: ${cidade}`)
    })
    console.log("-".repeat(40))
    console.log(cidades.toString())
    console.log(cidades.join(" - "))

    const  numeros = [5, 10, 15, 20]
    let soma = 0
    numeros.forEach(num => soma += num)
    console.log("-".repeat(40))
    console.log(`Soma dos números: ${soma}`)
