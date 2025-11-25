const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inRemedio.value
    const preco = Number(frm.inValor.value)

    const calculo = Math.floor(preco * 2)

    resp1.textContent = `Produto: ${produto}`
    resp2.textContent = `Valor na promoção: R$${calculo.toFixed(2)}`

    e.preventDefault()
})