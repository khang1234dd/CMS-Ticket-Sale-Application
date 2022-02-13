import React from 'react';
import './style.scss'

type buttonOutLineProps = {
    style?: React.CSSProperties|{}
    children?: React.ReactNode |null
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void
}


const index = ({children,style,onClick}:buttonOutLineProps) => {
  return (
    <button className="btoutline" style={style} onClick={onClick}>
        {children}
    </button>
  );
};

export default index;
