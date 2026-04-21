let senhaCadastrada = prompt("Cadastre sua senha:");
let senhaConfirmacao = prompt("Digite novamente a senha para confirmação:");

    //O === garante que nada "parecido" seja aceito, apenas o que for exatamente igual.
if (senhaCadastrada === senhaConfirmacao) {
    alert("Acesso permitido.");
} else {
    // Se não corresponde ao if, obrigatoriamente as senhas são diferentes.
    alert("Senha incorreta.");
}