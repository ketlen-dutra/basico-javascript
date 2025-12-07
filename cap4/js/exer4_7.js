const frm = document.querySelector("form")
const resp1 = document.querySelector("#outValor")
const resp2 = document.querySelector("#outTemp")
const resp3 = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if(numero < 1.00) {
        alert(`Valor Insuficiente. Mínimo R$ 1.00`)
        frm.inNumero.focus()
        return
    }
    
    let troco
    let temp

    if(numero >= 3.00) {
        troco = numero - 3.00
        temp = 120
    }else if(numero >= 1.75) {
        troco = numero - 1.75
        temp = 60
    }else {
        troco = numero - 1.00
        temp = 30
    }
    resp1.textContent = `Valor Inserido: ${numero.toFixed(2)}`
    resp2.textContent = `Tempo: ${temp}min`
    if(troco > 0) {
    resp3.textContent = `Troco: ${troco.toFixed(2)}`
    }
    
})

frm.addEventListener("reset", () => {
    resp1.textContent = ``
    resp2.textContent = ``
    resp3.textContent = ``
})