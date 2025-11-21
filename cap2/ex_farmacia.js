function mostrarDesconto() {
    var inRemedio = document.getElementById("inRemedio");
    var inValor = document.getElementById("inValor");
    var outRemedio = document.getElementById("outRemedio");
    var outDesconto = document.getElementById("outDesconto");

    var remedio = inRemedio.value;
    var valor = Number(inValor.value);

    var calculo = Math.floor(valor * 2);
    
    outRemedio.textContent = "Promoção de " + remedio;
    outDesconto.textContent = "Total com desconto: " + calculo.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDesconto);