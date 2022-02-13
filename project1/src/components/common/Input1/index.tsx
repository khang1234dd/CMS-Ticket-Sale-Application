import React from "react";
import { styled } from "@mui/material/styles";
import { borderRadius } from "@mui/system";


const StyleInput = styled("input")({
  width: "100%",
  height: "auto",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.4375rem",
  border: "1px solid #A5A8B1",
  borderRadius: '8px',
  padding: '6px 10px',
  "&:focus":{
    outline: 'none',
  }
});

const Input1 = ({ ...props }: any) => {
  return <StyleInput {...props}></StyleInput>;
};

export default Input1;
