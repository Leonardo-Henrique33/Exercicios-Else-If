let senhaCadastrada = prompt("Cadastre uma senha:");
let senhaConfirmacao = prompt("Digite novamente a senha para confirmação:");

if (senhaCadastrada === senhaConfirmacao) {
    alert("Acesso permitido.");
} else {
    alert("Senha incorreta.");
}