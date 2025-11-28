//Resolução alternativa ao exercício 4_2

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const fem = frm.inFeminino.checked
    const altura = Number(frm.inAltura.value)

    const peso = fem ? 21 * Math.pow(altura,2): 22 * Math.pow(altura,2)

    resp.textContent = `${nome}, seu peso ideal é: ${peso.toFixed(3)}kg`
})

frm.addEventListener("reset", () => {

    resp.textContent = `` //limpa o conteúdo do elemento h3
})