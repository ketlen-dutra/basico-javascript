const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const num = frm.inNumero.value

    let resposta = ""

    for(let i = 1; i < num; i++) {
        
        resposta += `${nome} * `
        
    }
    resp1.textContent = `${resposta} ${nome}`
})