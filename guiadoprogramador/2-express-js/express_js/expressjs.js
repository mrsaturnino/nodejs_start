//Inicializando o expressJS
const express = require("express"); //importando o ExpressJS para a constante "express"
const app = express(); //Inicializando o express, através do método "express();" que foi importado.

//Criando rotas com o "get()".

app.get("/", function (req, res) { //função com os parâmetros "req" (requisição) e "res" (resposta).
    res.send("Bem-vindo ao site!") //Não podem ser enviadas duas "respostas".
})

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao blog!")
})

app.get("/canal/youtube", function(req, res) {
    res.send("Bem-vindo ao canal do youtube!")
})


//Abrindo o servidor
app.listen(4000, function(erro) { //Definida a porta do servidor e criada uma função para exibir uma mensagem em caso de erro e de normalidade.
    if (erro) {
        console.log("Ocorreu um erro ao iniciar o servidor.")
    }else {
        console.log("Servidor iniciado")
    }
})