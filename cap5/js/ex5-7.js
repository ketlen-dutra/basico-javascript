const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inQtd.value)

    let estrelas = ""   //variével que irá concatenar as estrelas/traços

    for(let i = 1; i <= numero; i++) {   //cria laço de repetição de 1 até num
        if(i % 2 == 1) {
            estrelas += "*"   //na posição ímpar do i: "*"
        }else {
            estrelas += "-"   //na posição par: "-"
        }
    }
    resp.textContent = `Resultado: ${estrelas}`   //exibe as estrelas
})