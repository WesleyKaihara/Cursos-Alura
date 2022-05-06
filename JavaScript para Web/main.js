function TocaSom(seletorAudio) {
  const element = document.querySelector(seletorAudio);
  (element === null) ? alert('Elemento não encontrado') : element.play();
}

const Teclas = document.querySelectorAll('.tecla');


for (let i = 0; i < Teclas.length; i++) {
  const tecla = Teclas[i];

  const Instrumento = tecla.classList[1];
  const IdAudio = `#som_${Instrumento}`;

  tecla.onclick = function () {
    TocaSom(IdAudio);
  }

  tecla.onkeydown = function (event) {

    if (event.code === 'Space' || event.code === 'Enter') {
      tecla.classList.add('ativa');
    }

  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }

}