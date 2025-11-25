// cria referência ao form e aos elementos h3 (respostas)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    //obtem conteudo dos campos
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50
    const parcelas = (preco * 0.50) / 12

    //exibe as respostas
    resp1.textContent = `Modelo: ${veiculo}`
    resp2.textContent = `Entrada de: ${entrada.toFixed(2)}`
    resp3.textContent = `Parcelas em 12x: ${parcelas.toFixed(2)}`

    e.preventDefault() //evita envio do form
})