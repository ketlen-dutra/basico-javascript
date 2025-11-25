const frm = document.querySelector("form")
const resp = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
  const preco = Number(frm.inPreco.value)
  const gramas = Number(frm.inGramas.value)

  const calculo = (preco * gramas) / 1000

  resp.textContent = `Valor à pagar: R$${calculo.toFixed(2)}`

  e.preventDefault()
})