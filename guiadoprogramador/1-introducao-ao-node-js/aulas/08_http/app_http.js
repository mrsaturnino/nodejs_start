var http = require("http"); //importando a lib "http" que já vem no node.js


/*método "createServer()" para abrir o servidor, juntamente com o método "listen()" para colocar a porta:
    > http.createServer().listen(8484)
*/
http.createServer(function(requisicao, resposta) { //função criada para exibir algo a partir do servidor. Sendo possível inserir elementos html.
    resposta.end("<h1>Bem vindo ao meu site!</h1><h3>mrsaturnino</h3>")
}).listen(8181);

console.log("O servidor está rodando!")