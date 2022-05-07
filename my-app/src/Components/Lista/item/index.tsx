import { ITarefa } from '../../../types/Tarefas';
import style from './item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSeleciona: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completo,
  id,
  selecionaTarefa
}: Props) {
  return (

    <li className={`
    ${style.item} ${selecionado ? style.itemSelecionado : ""} ${completo ? style.itemCompletado : ''}`}
      onClick={() => !completo && selecionaTarefa({ tarefa, tempo, selecionado, completo, id })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {/* renderização condicional */}
      {completo && <span className={style.concluido} arial-label="tarefa completa"></span>}
    </li>
  )
}