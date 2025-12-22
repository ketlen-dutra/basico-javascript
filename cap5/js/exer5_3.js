const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const entrada = Number(frm.inNumero.value)

    let perfeitos = `Divisores do ${entrada}: 1`
    let soma = 1
    
    for(let i = 2; i <= entrada / 2; i++) {
        if(entrada % i == 0) {
            perfeitos += `, ${i}`
            soma += i
        }
    }
    perfeitos += ` Soma: ${soma}`

    resp1.textContent = perfeitos

    if(soma == entrada) {
        resp2.textContent = `${entrada} é um número perfeito`
    }else {
        resp2.textContent = `${entrada} não é um número perfeito`
    }
});