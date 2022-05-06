import React from 'react';
import { ITarefa } from '../../types/Tarefas';
import Botao from '../Button';
import style from './form.module.scss';
import { v4 as uuidV4 } from 'uuid';
class Formulario extends React.Component<{
  //pegar tipo de dados 
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
  state = {
    tarefa: '',
    tempo: '00:00:00'
  }

  //Especificar tipo de dado e local onde o valor esta sendo enviado
  newTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //spread react js
    this.props.setTarefas(tarefasAntigas =>
      [...tarefasAntigas,
      {
        ...this.state,
        selecionado: false,
        completo: false,
        //Criar id para cada tarefas e assim possibilitar o gerenciamento delas
        id: uuidV4()
      }
      ]);
    //resetar formulario após adicionar tarefas
    this.setState({
      tarefa: "",
      tempo: '00:00:00'
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.newTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label>Adicione um novo estudo</label>
          <input
            type="text"
            id="tarefa"
            name='tarefa'
            placeholder='Oque você quer estudar?'
            value={this.state.tarefa}
            required
            onChange={event => this.setState({ ...this.state, tarefa: event.target.value })}
          />
        </div>

        <div className={style.inputContainer}>
          <label>Tempo</label>
          <input
            type="time"
            step='1'
            name='tempo'
            id='tempo'
            min="00:00:00"
            max="01:30:00"
            value={this.state.tempo}
            required
            onChange={event => this.setState({ ...this.state, tempo: event.target.value })}
          />
        </div>
        <Botao type='submit'>
          Adicionar
        </Botao>

      </form>
    )
  }
}


export default Formulario;