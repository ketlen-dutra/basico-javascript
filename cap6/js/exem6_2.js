const frm = document.querySelector("form")
const resp1 = document.querySelector("#outErros")
const resp2 = document.querySelector("#outChances")
const resp3 = document.querySelector("#outDica")

const erros = []  //vetor de escopo global com números já apostados
const aleatorio = Math.floor(Math.random() * 100) + 1  //num aleatório entre 1 e 100
const CHANCES = 6 //constante com número máximo de chances

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if(numero == aleatorio) {
        resp3.textContent = `Você acertou! Número: ${numero}`
        frm.btApostar.disabled = true
        frm.btRepetir.className = "exibe"
        
    }else {
        if(erros.includes(numero)) { //se número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente novamente`)
        }else {
            erros.push(numero)  //adiciona número ao vetor

            const numErros = erros.length //obtem o tamanho do vetor
            const numChances = CHANCES - numErros //calcula o nº de chances

            //exibe nº de erros, conteúdo do vetor e nº de chances
            resp1.textContent = `${numErros} (${erros.join(",")})`
            resp2.textContent = numChances

            if(numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btApostar.disabled = true
                frm.btRepetir.className = "exibe"
                
                resp3.textContent = `Game Over!! Número sorteado: ${aleatorio}`
            }else {
                //usa operador ternário para mensagem da dica
                const dica = numero < aleatorio ? "maior" : "menor"
                resp3.textContent = `Dica: tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""  //limpa o campo de entrada
    frm.inNumero.focus()  //posiciona o cursor neste campo
});

frm.btRepetir.addEventListener("click", () => {
    location.reload() //recarrega a página
})