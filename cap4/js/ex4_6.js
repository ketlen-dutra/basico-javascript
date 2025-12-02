const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const entrada = Number(frm.inValor.value)

    if (entrada % 10 != 0) {
        alert(`Valor indisponível para as notas de (R$ 10, 50, 100)`)
        frm.inValor.focus()
        return
    }

    const notasCem = Math.floor(entrada / 100)
    let resto = entrada % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notasDez = Math.floor(resto / 10)

    if (notasCem > 0) {
        resp1.textContent = `Notas de 100: R$ ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.textContent = `Notas de 50: R$ ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.textContent = `Notas de 10: R$ ${notasDez}`
    }
})

frm.addEventListener("reset", () => {
    resp1.textContent = ``
    resp2.textContent = ``
    resp3.textContent = ``
})