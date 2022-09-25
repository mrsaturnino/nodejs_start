#arquivo "index.ejs" da pasta view.

##EXPLICAÇÃO EJS DAS AULAS 22-30

<!--TODOS os arquivos HTML devem ser postos na pasta "views" que é do EJS.-->
<!--Arquivo HTML principal do projeto, com a única diferença da extensão no arquivo.-->

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Projeto Perguntas e Respostas</title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <img src="" alt="">
    <h1>Plataforma de Perguntas e Respostas</h1>
    <hr />
    <h3>Lista de perguntas</h3>

    <!--Declarando a variável criada no HTML utilizando as tags "<%= %>"  -->
    <p>Nome: <%= nome %></p>
    <p>Linguagem favorita: <%= lang %></p>
    <p>Cargo: <%= cargo %></p>

    <!--Estruturas condicionais no HTML com o EJS-->
    <% if( msg == true) {%>
    <h3>Ocorreu um erro.</h3>

    <% } else{ %>
    <h3>Página funcionando normalmente.</h3>
    <% } %>

    <!--Estruturas de repetição no HTML com o EJS-->

    <% produtos.forEach(function(produto){ %><!--".forEach" é o método que irá varrer a array de objetos "produtos" e aplicar "para cada" objeto a function definida abaixo: -->
    <hr />
    <h3><%=produto.nome%></h3>
    <h4><%=produto.preco%></h4>
    <% }) %>

  </body>
</html>

#Arquivo "index.js" do projeto, das aulas de EJS.

const express = require("express"); //importando o express para o projeto
const app = express();

app.set('view engine', 'ejs'); //Passando para o Express o motor de template (view engine) que utilizaremos, que é o "ejs".

app.use(express.static('public'));

//criando uma rota

app.get("/:nome?/:lang?", (req, res) => {

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [ //Criando uma array de objetos que será utilizada na estrutura de repetição do arquivo EJS.
        {nome: "Bola de Basquete", preco: 89.99},
        {nome: "Tênis Nike Air Precision VI", preco: 320.00},
        {nome: "Camiseta Adidas Performance Dry Fit", preco: 79.99},
        {nome: "SmartWatch AmazFIT 5.0", preco: 599.99 },
        {nome: "SSD NVme Kingston 500GB M.2", preco: 279.99}
    ]

    res.render("index",{ //O método "render()" faz uma verificação dentro da pasta "views" para renderizar o arquivo inserido.

        //Também podemos criar objetos, inserir variáveis neles e exibir no arquivo HTML com o render().
        //basta declarar dentro do "  render("pagina.js", {var = valor})  " e no arquivo HTML, inserir com a tag "<%= %>"
        nome: nome,
        lang: lang,
        cargo: "Programador Backend Node.js",
        msg: exibirMsg, //valor booleano para estrutura condicional que está no EJS.
        produtos: produtos //inserindo a array de objetos "produtos" na renderização da página, ou seja, inserindo-o no HTML.
    })

});

app.listen(4040, ()=> { //Abrindo o server na porta 4040.
console.log("App rodando!")
});
