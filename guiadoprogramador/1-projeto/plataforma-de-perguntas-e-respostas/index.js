const express = require("express"); //importando o express para o projeto
const app = express();

app.set('view engine', 'ejs'); //Passando para o Express o motor de template (view engine) que utilizaremos, que é o "ejs".

//criando uma rota de teste

app.get("/", (req, res) => {
    res.render("index") //O método "render()" faz uma verificação dentro da pasta "views" para renderizar o arquivo inserido.
});


app.listen(4040, ()=> { //Abrindo o server na porta 4040.
    console.log("App rodando!")
});

