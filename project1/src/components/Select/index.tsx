import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useDispatch, useSelector } from "react-redux";

type SelectProps = {
  type: "outline" | "basic",
  sx?: React.CSSProperties,
  dataSelect: Array<string>,
  action: (payload:any)=>void
};

const styles = makeStyles({
  outlined: {
    "& .MuiSelect-outlined": {
      borderWidth: "0",
    },
  },
});

const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      border: "none",
    },
  },
  focused: {},
  notchedOutline: {},
}));

const useInputStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    "& $notchedOutline": {
      border: "1px solid #A5A8B1",
      borderRadius: "8px",
    },
    "&:hover $notchedOutline": {
      borderColor: "#A5A8B1"
    },
    "&$focused $notchedOutline": {
      borderColor: "#FF993C"
    },
    "& .MuiSelect-iconOutlined": {
      color: "#FF993C",
    },
  },
  focused: {},
  notchedOutline: {},
}));



export default function BasicSelect({ type, sx,dataSelect,action }: SelectProps) {
  const classes = styles();
  const tensukien = useSelector((state:any) => state.sukien.selectLocVeAction)
  const tinhtrang = useSelector((state:any) => state.goiVe.selectTinhTrang)
  console.log("tinhtrang",tinhtrang)
  const Data = dataSelect 
  const InputClasses =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    type === "outline" ? useOutlinedInputStyles() : useInputStyles();
  const [value, setValue] = useState<string | undefined>(type==="outline"?tinhtrang :tensukien);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    dispatch(action(event.target.value as string))
  };

  return (
    <Box sx={{ minWidth: "20%", ...sx }}>
      <FormControl sx={{ width: "90%", border: "none" }}>
        <Select
          classes={{ outlined: classes.outlined }}
          value={value}
          onChange={handleChange}
          displayEmpty
          sx={{ backgroundColor: "#F1F4F8", border: "none" }}
          inputProps={{ "aria-label": "Without label" }}
          input={<OutlinedInput classes={InputClasses} />}
        >
          <MenuItem  value=""><em>None</em></MenuItem>
          {Data.map((value,index)=>(<MenuItem key={index.toString()} value={value}>{value}</MenuItem>))}
          
        </Select>
      </FormControl>
    </Box>
  );
}
