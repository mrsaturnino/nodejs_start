//Inicializando o expressJS
const express = require("express"); //importando o ExpressJS para a constante "express"
const app = express(); //Inicializando o express, através do método "express();" que foi importado.

//Criando rotas com o "get()".

app.get("/", function (req, res) { //função com os parâmetros "req" (requisição) e "res" (resposta).
    res.send("Bem-vindo ao site!") 
})

//REQ => Dados recebidos do usuário
//RES => Dados que serão enviados ao usuário

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao blog!")
}) //Não podem ser enviadas duas "respostas" na mesma chamada.

app.get("/canal/youtube", function(req, res) {
    res.send("Bem-vindo ao canal do youtube!")
})

app.get("/pagina/:nome", function (req, res) { //o parâmetro "req" recebe a requisição do usuário ao modificar o link com o intuito de entrar em outra página.
    var nome = req.params.nome; //variável para armazenar o valor enviado ao parâmetro "req".
    res.send("<h1>Olá " + nome + " </h1>") //exibindo o valor enviado ao "req" através de uma variável.
})


//Abrindo o servidor
app.listen(4000, function(erro) { //Definida a porta do servidor e criada uma função para exibir uma mensagem em caso de erro e de normalidade.
    if (erro) {
        console.log("Ocorreu um erro ao iniciar o servidor.")
    }else {
        console.log("Servidor iniciado")
    }
})