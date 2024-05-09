//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha.
// Verifique se on nome de usuário é 
//admin; e a senha é senha123
// Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

//solicite ao usuario o nome do usuario.

let username = prompt("Digite um nome de usuário:")

//solicite ao usuario uma senha

let senha = prompt("Digite senha:")

//Verifique se o nome do usuario é adm ´´´admin´´´ e a senha é senha 123
//CASO SIM --> 
//CASO NÃO -->

if(username == "admin" && senha == "senha123"){
    console.log("Login bem sucedido")
}else {
    console.log("Voce não tem permissão de acesso")
}

//exiba uma mensagem indicando se o login foi bem sucedido ou não