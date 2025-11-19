
function converterDuracao() {
     // cria referência aos elementos da página
     var inFilme = document.getElementById("inFilme");
     var inDuracao = document.getElementById("inDuracao");
     var outTitulo = document.getElementById("outTitulo");
     var outConversao = document.getElementById("outConversao")

    // obtém conteúdos dos campos de entrada
     var filme = inFilme.value;
     var duracao = Number(inDuracao.value);

    // arredonda para baixo o resultado da divisão
     var horas = Math.floor(duracao / 60);
    // obtém o resto da divisão entre os números
     var minutos = duracao % 60;
    // altera o conteúdo dos parágrafos de resposta
     outTitulo.textContent = filme;
     outConversao.textContent = horas + " hora(s) e " + minutos + "minuto(s)";
}

// cria uma referência ao elemento btConverter (botão)
var btExibir = document.getElementById("exibir");
// registra um evento associado ao botão, para carregar uma função
btExibir.addEventListener("click", converterDuracao);