let altura = Number(prompt("Informe sua altura em metros:"));

if (isNaN(altura)) {
    alert("Por favor, digite um número válido para a altura.");
} else {
    if (altura >= 1.40) {
        alert(`Sua altura é ${altura}m.
Pode entrar no brinquedo!`);
    } else {
        alert(`Sua altura é ${altura}m.
altura insuficiente.`);
    }
}