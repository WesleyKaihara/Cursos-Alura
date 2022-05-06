import Botao from '../Button';
import Relogio from './Relogio';
import style from './cronometro.module.scss';

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escoha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>
        Começar
      </Botao>
    </div>
  )
}