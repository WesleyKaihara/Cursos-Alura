import React, { useState } from 'react';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './app.module.scss';
import Cronometro from '../Cronometro';
import { ITarefa } from '../../types/Tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })

    ));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completo: true
          }
        }
        return tarefa;
      }
      )
      )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
