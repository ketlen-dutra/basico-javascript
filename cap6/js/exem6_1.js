const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []  //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value  //obtem nome do paciente
    pacientes.push(nome)  //adiciona o nome no final do vetor

    let lista = ""  //string para concatenar pacientes
    //for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
    for(let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}.${pacientes[i]}\n`
    }
    respLista.textContent = lista 
    frm.inPaciente.value = ""  //limpa conteúdo do campo de formulário
    frm.inPaciente.focus()  //posiciona o cursor no campo
})

//adiciona um "ouvinte para o evento click no btUrgencia que está no form"
frm.btUrgencia.addEventListener("click", () => {
    //verifica se as validações do form estão ok (no caso, paciente is required)
    if(!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus() //posiciona o cursor no campo inPaciente
        return //retorna ao form
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome)  //adiciona paciente ao início do vetor

    let lista = ""  //string para concatenar pacientes
    //forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.${paciente}\n`))

    respLista.textContent = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
}) 

frm.btAtender.addEventListener("click", () => {
    if(pacientes.length == 0) {  //se o tamanho do vetor = 0
        alert("Não há paciente na lista de espera")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()  //remove do início da fila (e obtém o nome)

    respNome.textContent = atender

    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.${paciente}\n`))

    respLista.textContent = lista
})
