/**
 * Localizar conteúdo:
 * indexOf() > busca ocorre a partir do início do vetor
 * lastIndexOf() > busca ocorre a partir do final
 * includes() > retorna verdadeiro ou falso de acordo com a existência ou não do conteúdo
 */

const prompt = require("prompt-sync")()

const idades = [5,6,8,3,6,9]

console.log(idades.indexOf(6))
console.log(idades.lastIndexOf(6))
console.log(idades.indexOf(7))
console.log(idades.includes(3))