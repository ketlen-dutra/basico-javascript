const frm = document.querySelector("form")
const resp1 = document.querySelector("#outVerifica")
const resp2 = document.querySelector("#outTipo")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const lado1 = Number(frm.inLado1.value)
    const lado2 = Number(frm.inLado2.value)
    const lado3 = Number(frm.inLado3.value)

    if(lado1 > lado2 + lado3 || lado2 > lado1 + lado3 || lado3 > lado1 + lado2) {
        resp1.textContent = `Não formam um triângulo.`
    }else {
        resp1.textContent = `Os lados formam um triângulo.`

        if(lado1 == lado2 && lado1 == lado3) {
            resp2.textContent = `Tipo: Equilátero.`
        }else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
            resp2.textContent = `Tipo: Isósceles.`
        }else {
            resp2.textContent = `Tipo: Escaleno.`
        }
    }
})