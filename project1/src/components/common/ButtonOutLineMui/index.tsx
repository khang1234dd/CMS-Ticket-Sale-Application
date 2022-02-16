import React from 'react';
import './style.scss'
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles'

type buttonOutLineMuiProps = {
    type?: 'submit' | 'button' | null | undefined
    style?: React.CSSProperties|{}
    children?: React.ReactNode |null
    onClick?: any
}

const StyleButton = styled(Button)({
    border: '1px solid #FF993C',
    color: '#FF993C',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    textTransform: 'none',
    '&:hover':{
        border: '1px solid #FF993C',
        backgroundColor: '#FFEAD8'
    }
})

const ButtonOutLineMui = ({children,style,onClick,type}:buttonOutLineMuiProps) => {
  return (
    <StyleButton type={type === "submit"? "submit" : "button"} variant="outlined" sx={style} onClick={onClick}>
        {children}
    </StyleButton>
  );
};

export default ButtonOutLineMui;
