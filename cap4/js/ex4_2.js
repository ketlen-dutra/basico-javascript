const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const fem = frm.inFeminino.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if (fem) {
        peso = 21 * Math.pow(altura,2)
    } else {
        peso = 22 * Math.pow(altura,2)
    }

    resp.textContent = `${nome}, seu peso ideal é: ${peso.toFixed(3)}kg`
})

frm.addEventListener("reset", () => {

    resp.textContent = `` //limpa o conteúdo do elemento h3
})