const Sequelize = require('sequelize'); //importando o sequelize

//conexão com o banco de dados
const connection = new Sequelize('projetoperguntas', 'root','a123456',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection; //exportando o arquivo de conexão do banco de dados