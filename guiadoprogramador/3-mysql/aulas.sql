/*
    O código é apenas para documentar os comandos do MySQL.
*/

SHOW DATABASES; /*Mostra todos os bancos de dados no PC*/

CREATE DATABASE banco; /*Criando o banco de dados*/

USE banco; /*Selecionando o banco*/

/*Criando uma tabela*/
CREATE TABLE usuarios( 
    nome varchar(50),
    email varchar(100),
    idade int(11)
);

/*
Tipos de dados:

varchar
char
int
float
date
blob (arquivos)
*/

/*Mostrando as tabelas do banco atual*/
SHOW TABLES;

/*Mostra as especificações da tabela criada*/
DESCRIBE usuarios;

/*Inserindo registros em cada coluna da tabela*/
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Andre",
    "andre@hotmail.com",
    20
); /*OBS.: Os registros devem ser inseridos na ordem declarada nos parâmetros do INSERT INTO.*/


/*Selecionando todos os registros da tabela para serem mostrados.*/
SELECT * FROM usuarios;


/*Selecionando todos os registros que atendem à condicional.*/

SELECT * FROM usuarios WHERE idade <= 20;

/*Deletando registros de uma tabela*/

DELETE FROM usuarios; /*Deletando TODOS os registros da tabela.*/

DELETE FROM usuarios WHERE nome = "Andre"; /*Deletando todos os registros que atenderem à condicional imposta com o WHERE.*/

/*Atualizando registros de uma tabela*/
UPDATE usuarios SET nome = "Nome" /*Atualizando TODOS os registros de uma tabela.*/

UPDATE usuarios SET nome = "Antonio", email = "antonio@hotmail.com" WHERE nome = "Andre"; /*Atualizando dois campos ESPECÍFICOS de um ÚNICO REGISTRO da tabela usuário.*/