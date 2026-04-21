let valorCompra = Number(prompt("Digite o valor da compra:"));

// Validação com isNaN
if (isNaN(valorCompra)) {
    alert("Erro: O valor digitado não é um número!");
} else {

    if (valorCompra >= 150) {
        let desconto = valorCompra * 0.02;
        let novoTotal = valorCompra - desconto;

      
        alert(`Valor do desconto: R$ ${desconto.toFixed(2)}
Novo valor total: R$ ${novoTotal.toFixed(2)}`);

    } else {
        let cashback = valorCompra * 0.02;

        alert(`Valor total da compra: R$ ${valorCompra.toFixed(2)}
Cashback de 2%: R$ ${cashback.toFixed(2)}`);
    }
}