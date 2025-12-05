const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const estrada = Number(frm.inEstrada.value)
    const veiculo = Number(frm.inVeiculo.value)

    if(veiculo <= estrada) {
        resp.textContent = `Situação: Sem Multa`
        resp.style.color = "green"

    }else {
        const calculo = estrada * 1.20
        if(veiculo <= calculo) {
            resp.textContent = `Situação: Multa Leve`
            resp.style.color = `orange`
        }else{
            resp.textContent = `Situação: Multa Grave`
            resp.style.color = `red`
        }
    }
})