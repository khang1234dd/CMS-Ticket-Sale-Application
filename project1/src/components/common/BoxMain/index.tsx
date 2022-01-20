import React from 'react';
import './style.scss';
import Box from '@mui/material/Box';

type boxProps = {
    header: string,
    children: React.ReactNode,

}

const BoxStyle={
  borderRadius:'24px',
  height:'85vh',
  width:'auto',
  marginLeft: '300px',
  marginRight: '1.25rem',
  minWidth: '650px',
  backgroundColor:'#fff',
  padding: '1.5rem',
}


const index = ({header,children}:boxProps) => {
  return (
    <Box sx={BoxStyle}>
      <div className="headerStyle">{header}</div>
      {children}
    </Box>
  );
};

export default index;