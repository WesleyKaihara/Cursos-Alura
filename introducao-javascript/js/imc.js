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

  var alturaEhValida = true;
  var pesoEhValido = true;

  if (peso <= 0 || peso >= 300) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("dadosInvalidos")
  }

  if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    paciente.classList.add("dadosInvalidos")
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }

}
