import React from 'react';
import style from './botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
  return (
    <button
      onClick={onClick}
      className={style.botao}
      type={type}>
      {children}
    </button >
  )
}


//Criar componentes react
//Don't repeat yourself
//Não repetir itens dentro da aplicação

// class Botao1 extends React.Component<{
//   children: React.ReactChild,
//   type?: "button" | "submit" | "reset" | undefined,
//   onClick?: () => void
// }>{
//   render() {
//     const { type = 'button', onClick } = this.props;
//     return (
//       <button onClick={onClick} className={style.botao} type={type}>
//         {this.props.children}
//       </button >
//     );
//   }
// }

export default Botao;