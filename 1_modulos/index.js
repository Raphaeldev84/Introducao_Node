const funcaoImc = require("./moduloImc");

const calculadora = require("./moduloCalculadora")

const moduloImc = require("./moduloImc");

/*console.log(calculadora);
console.log(calculadora.soma(1, 1));
console.log(calculadora.div(50, 3));
console.log(calculadora.mult(5, 10));
console.log(calculadora.pi);*/

// console.log("-------EXERCÍCIO UM------")
// const resultado = moduloImc.calcularImc(88.5, 1.9);
// console.log(moduloImc.statusImc(resultado));

// console.log("-------EXERCÍCIO DOIS------")inde
// const convertTemp = require("./moduloConversor");
// console.log(convertTemp.convertC(30));
// console.log(convertTemp.convertF(90));

console.log("-------EXERCÍCIO TRÊS------")
const autenticacao = require('./moduloUsuarios')
const autenticado = autenticacao('jose@gmail.com', 'jose')
if (autenticado){
    console.log('Autenticado')
} else {
    console.log('Não autenticado')
}