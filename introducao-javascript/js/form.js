var botao = document.querySelector('#adicionar-paciente');
var form = document.querySelector('#form');

botao.addEventListener('click', function (e) {
  e.preventDefault();

  var paciente = getPacienteForm(form);
  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    getErros(erros);
    return;
  }

  adicionaPacienteTabela(tabela);
  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);

  form.reset();
})


function getPacienteForm(form) {
  paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function getTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe)
  return td;
}

function validaPaciente(paciente) {

  var Erros = [];

  if (!ValidaPeso(paciente.peso)) {
    Erros.push("Peso inválido")
  }
  if (!ValidaAltura(paciente.altura)) {
    Erros.push("Alura inválida")
  }
  return Erros;
}

function adicionaPacienteTabela(paciente) {
  var pacienteTr = getTr(paciente);
  var tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
}


function getErros(erros) {

  var ul = document.querySelector('#mensagensErro');

  erros.forEach(function (erro) {
    var li = document.createElement('li');
    li.classList.add("MsgErro");
    li.textContent = erro;
    ul.appendChild(li);
  })
}