     // cria referência ao form e aos elementos h3 e h4 (resposta)

     const frm = document.querySelector("form")
     const resp1 = document.querySelector("h3")
     const resp2 = document.querySelector("h4")

    // cria um ouvinte de evento, acionado quando o botão submit for clicado
     frm.addEventListener("submit", (e) => {
          //obtem conteudo dos campos
          const titulo = frm.inFilme.value
          const duracao = Number(frm.inDuracao.value)

          const horas = Math.floor(duracao / 60) //arredonda para baixo
          const minutos = duracao % 60 //obtem o resto da divisao

          //exibe as respostas
          resp1.textContent = `Filme: ${titulo}`
          resp2.textContent = `Duração: ${horas} hora(s) e ${minutos} minuto(s)`

          e.preventDefault() //evita envio do form
     })