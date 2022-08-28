var nomeCalculadora = "C.A.L" //nome da calculadora

function soma(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function divi(a,b) {
    return a/b;
}

function multi(a,b) {
    return a * b;
}

module.exports = {
    soma,
    sub,
    divi,
    multi,
    nomeCalculadora,
}; //disponibilizando a variável "nomeCalculadora" e as funções "soma, sub, divi e multi" dentro de um objeto para serem utilizadas em outros arquivos.