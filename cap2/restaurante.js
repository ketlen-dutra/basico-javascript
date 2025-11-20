function valorAlmoco() {
     // cria referência aos elementos manipulados pelo programa
    var inPreco = document.getElementById("inPreco");
    var inGramas = document.getElementById("inGramas");
    var outValor = document.getElementById("outValor");

      // obtém conteúdo dos campos de entrada
    var preco = Number(inPreco.value);
    var gramas = Number(inGramas.value);

    // calcula valor da comida em gramas
    var calculo = (preco * gramas) / 1000;

     // altera o conteúdo dos parágrafos de resposta
    outValor.textContent = "Valor a pagar R$: " + calculo.toFixed(2); 
}
// cria uma referência ao elemento btVerPromocao (botão)
var btValor = document.getElementById("btValor");
// registra um evento associado ao botão, para carregar uma função
btValor.addEventListener("click", valorAlmoco);