let altura = Number(prompt("Informe sua altura em metros:"));

if (isNaN(altura)) {
    alert("Erro: Insira um número válido.");
} else {

    if (altura >= 1.40) {
        alert("Pode entrar no brinquedo.");
    } else {
        alert("Altura insuficiente.");
    }
}