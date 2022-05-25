var pacientes = document.querySelectorAll('.paciente');

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var nome = paciente.querySelector('.info-nome');
  var tdaltura = paciente.querySelector('.info-altura');
  var altura = paciente.querySelector('.info-altura').textContent;

  var tdpeso = paciente.querySelector('.info-peso');
  var peso = paciente.querySelector('.info-peso').textContent;

  var tdImc = paciente.querySelector(".info-imc");
  var Imc = paciente.querySelector(".info-imc").textContent;

  var alturaEhValida = ValidaAltura(altura);
  var pesoEhValido = ValidaPeso(peso);

  if (!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("dadosInvalidos")
  }

  if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    paciente.classList.add("dadosInvalidos")
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }

}

function ValidaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function ValidaAltura(altura) {
  if (altura >= 0 && altura < 1000) {
    return true;
  } else {
    return false;
  }
}