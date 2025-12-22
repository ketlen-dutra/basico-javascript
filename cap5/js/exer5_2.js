const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inicial = Number(frm.inQuantidade.value)
    const anos = Number(frm.inAnos.value)

    let resposta = ""
    let acumulado = inicial

    for(let i = 1; i <= anos; i++) {
        
        resposta += `${i}° ano: ${acumulado} Chinchilas\n`
        acumulado = acumulado * 3
        
        resp.textContent = resposta
    }

})