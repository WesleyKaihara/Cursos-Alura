import React from 'react';
import style from './botao.module.scss';

//Criar componentes react
//Don't repeat yourself
//Não repetir itens dentro da aplicação

class Botao extends React.Component<{
  children: React.ReactChild,
  type?: "button" | "submit" | "reset" | undefined
}>{
  render() {
    const { type = 'button' } = this.props;
    return (
      <button className={style.botao} type={type}>
        {this.props.children}
      </button >
    );
  }
}

export default Botao;