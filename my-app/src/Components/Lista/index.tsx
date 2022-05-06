import style from './lista.module.scss';
import Item from './item/index';
import { ITarefa } from '../../types/Tarefas';

interface Props {
  tarefas: ITarefa[],
  //função não possui retorno
  selecionaTarefa: (tarefaSeleciona: ITarefa) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          //passar todos os item e em seguida desestruturar
          //alguns casos são passados dados desnecessarios
          //Principio de Responsabilidade unicas -> Unica responsabilidade para cada componente
          />
        ))}
      </ul>
    </aside>
  )
}
