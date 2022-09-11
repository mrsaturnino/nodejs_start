const express = require("express");
const app = express();

//Nas aulas anteriores, aprendemos a criar rotas e inserir os parâmetros de forma "injetada".
//Com o query params, é possível fazer isso de forma dinâmica.


app.get("/canal/youtube", function(req, res) {
    var canal = req.query["canal"];
    
    if (canal) {
        res.send(canal)
    } else {
        res.send("Nenhum canal fornecido!")
    }
})


//Abrindo o servidor
app.listen(4050, function(erro) { //Definida a porta do servidor e criada uma função para exibir uma mensagem em caso de erro e de normalidade.
    if (erro) {
        console.log("Ocorreu um erro ao iniciar o servidor.")
    }else {
        console.log("Servidor iniciado")
    }
})