/*
Inclusão e Exclusão de itens

push() = adiciona um elemento ao final do vetor
unshift() = adiciona ao início do vetor e desloca os elementos existentes uma posição abaixo
pop() = remove o último elemento do vetor
shift() = remove o primeiro elemento do vetor e desloca os demais elementos uma posição acima
*/

    const prompt = require("prompt-sync")()

    const cidades = ["Pelotas"]  //declara e define o conteúdo inicial do vetor

    cidades.push("São Lourenço")  //adiciona outra cidade ao final do vetor

    console.log(cidades)

    cidades.unshift("Porto Alegre")  //adiciona no início e desloca os demais

    console.log(cidades)

    const ultima = cidades.pop() //remove a última cidade do vetor

    console.log(cidades)

    const primeira = cidades.shift() //remove a primeira e "sobe" as demais

    console.log(cidades)