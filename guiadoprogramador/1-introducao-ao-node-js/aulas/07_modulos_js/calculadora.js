var calculos = require("./calculos") //importando o objeto do "module.exports" do arquivo "calculos.js" para dentro de uma variável.

//módulos são uma forma de dividir um programa em partes. Através do "require()" e do "module.exports = " podemos importar e exportar (respectivamente) funções, variáveis, objetos e muito mais.

console.log(calculos.nomeCalculadora)
console.log(`A soma 5 + 6 é igual a: ${calculos.soma(5,6)}`)
console.log(`A subtração 10 - 6 é igual a: ${calculos.sub(10,6)}`)
console.log(`A multiplicação 5 * 6 é igual a: ${calculos.multi(5,6)}`)
console.log(`A divisão é 30 / 6 é igual a: ${calculos.divi(30,6)}`)