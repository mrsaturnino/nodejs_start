const express = require("express"); //importando o express para o projeto
const app = express();

app.set('view engine', 'ejs'); //Passando para o Express o motor de template (view engine) que utilizaremos, que é o "ejs".

//criando uma rota

app.get("/:nome/:lang", (req, res) => {
    
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
        produtos: produtos //inserindo a array de objetos "produtos" na renderização da página.
    })
});


app.listen(4040, ()=> { //Abrindo o server na porta 4040.
    console.log("App rodando!")
});

