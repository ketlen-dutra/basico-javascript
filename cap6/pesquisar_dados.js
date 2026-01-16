const prompt = require("prompt-sync")()

const idades = [12,16,15,17,14]

let maiores = false //variável de controle

for(const idade of idades) {
    if(idade >= 18) {
        console.log(idade)
        maiores = true
    }
}
if(!maiores) {
    console.log("Não há idades maiores que 18 na lista")
}

//Também poderíamos atribuir 0 (valor inicial) e 1 (dentro do laço) para a variável maiores.