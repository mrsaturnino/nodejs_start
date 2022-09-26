const express = require("express"); //importando o express para o projeto
const app = express();
const bodyParser = require("body-parser"); //importando o Body Parser para captura de dados enviados pelo formulário
const connection = require("./database/database");

//Banco de dados

connection //estrutura promise javascript
    .authenticate() //o '.authenticate()' vai tentar fazer a conexão com o banco.
    .then(() =>{ // o '.then()' irá exibir uma mensagem quando a conexão com o MySQL for bem sucedida.
        console.log("Conexão com o Banco de Dados realizada!")
    })
    .catch((msgErro) => { // o '.catch()' irá exibir um erro quando a conexão com o banco der errado.
        console.log(msgErro)
    })

//Passando para o Express o motor de template (view engine) que utilizaremos, que é o "ejs".
app.set('view engine', 'ejs'); 
app.use(express.static('public'));

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false})); //O método "urlenconded()" do body parser decodifica os dados enviados pelo formulário em uma estrutura JavaScript.
app.use(bodyParser.json()); //O método "json()"" do body parser faz com que os dados de formulário venham em formato JSON.


//ROTAS
app.get("/", (req, res) => {

    res.render("index");
});

app.get("/perguntar", (req, res) => { //Rota para renderização da página "perguntar.ejs"
    res.render("perguntar.ejs")
});

app.post("/dadosformulario", (req, res) => { //Rota para receber os dados preenchidos do formulário por meio de uma rota do tipo POST.
    var title = req.body.title; //capturando os dados do formulário com o body-parser
    var description = req.body.description;
    res.send("Dados do formulário recebidos! " + "Título da pergunta: " + title + " Descrição: " + description)
});

app.listen(4040, ()=> { //Abrindo o server na porta 4040.
    console.log("App rodando!")
});

