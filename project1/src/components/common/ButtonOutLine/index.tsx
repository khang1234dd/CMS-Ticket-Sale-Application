import React from 'react';
import './style.scss'

type buttonOutLineProps = {
    style?: React.CSSProperties|{}
    children?: React.ReactNode |null
}


const index = ({children,style}:buttonOutLineProps) => {
  return (
    <button className="btoutline" style={style}>
        {children}
    </button>
  );
};

export default index;
