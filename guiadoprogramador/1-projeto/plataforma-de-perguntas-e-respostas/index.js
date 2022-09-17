const express = require("express"); //importando o express para o projeto
const app = express();

app.set('view engine', 'ejs'); //Passando para o Express o motor de template (view engine) que utilizaremos, que é o "ejs".

//criando uma rota

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    res.render("index",{ //O método "render()" faz uma verificação dentro da pasta "views" para renderizar o arquivo inserido.
        
        //Também podemos criar objetos, inserir variáveis neles e exibir no arquivo HTML com o render().
        //basta declarar dentro do "  render("pagina.js", {var = valor})  " e no arquivo HTML, inserir com a tag "<%= %>"
        nome: nome,
        lang: lang, 
        cargo: "Programador Backend Node.js",
        msg: exibirMsg //valor booleano para estrutura de repetição que está no EJS.
    })
});


app.listen(4040, ()=> { //Abrindo o server na porta 4040.
    console.log("App rodando!")
});

