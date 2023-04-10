// Módulo IMC
// Terá funcionalidades a respeito
// do cálculo
// CommonJS

function calcularImc(peso, altura) {
    return peso / (altura * altura);
  }
  
  function statusImc(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }
  
  // Deste arquivo, irei exportar
  // apenas a função calcularImc
  module.exports = { calcularImc, statusImc };
  