const frm = document.querySelector("form")
const resp1 = document.querySelector("#nomeProduto")
const resp2 = document.querySelector("#exibirPromocao")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const calculo = preco / 2
    const total = (preco * 2) + calculo

    resp1.textContent = `${produto}: Promoção Leve 3 por R$${total.toFixed(2)}`
    resp2.textContent = `O terceiro produto sai por: R$${calculo.toFixed(2)}`

    e.preventDefault()
})