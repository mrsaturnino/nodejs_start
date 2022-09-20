const express = require("express"); //importando o express para o projeto
const app = express();

app.set('view engine', 'ejs'); //Passando para o Express o motor de template (view engine) que utilizaremos, que é o "ejs".

app.use(express.static('public'));

app.get("/", (req, res) => {

    res.render("index");
});


app.listen(4040, ()=> { //Abrindo o server na porta 4040.
    console.log("App rodando!")
});

