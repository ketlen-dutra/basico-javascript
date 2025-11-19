function mostrarPromocao() {
     // cria referência aos elementos manipulados pelo programa
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

     // obtém conteúdo dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    // calcula valor da entrada e das parcelas
    var entrada = preco / 2;
    var parcela = entrada / 12;

    // altera o conteúdo dos parágrafos de resposta
    outVeiculo.textContent = "Modelo: " + veiculo;
    outEntrada.textContent = "Entrada de 50% R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
 // cria uma referência ao elemento btVerPromocao (botão)
var btExibir = document.getElementById("btExibir");
 // registra um evento associado ao botão, para carregar uma função
btExibir.addEventListener("click", mostrarPromocao);