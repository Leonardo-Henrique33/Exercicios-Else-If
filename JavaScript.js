let numero = Number(prompt("Digite um número"));

// A função isNaN (is Not a Number) verifica se o valor da variável não é um número válido

if (isNaN(numero)) {

    alert("Por favor, diigite um número");
}

else {

    // O operador % (módulo) retorna o resto da divisão. 
    // Se o resto da divisão por 2 for zero, o número é par.
    if (numero % 2 === 0) {
        alert("O número é par.");
    } else {
        alert("O número digitado é ímpar.");
    }
}   