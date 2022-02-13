import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

type SelectProps = {
  type: "outline" | "basic";
  sx?: React.CSSProperties
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

const Item = ['Đang áp dụng', 'Tắt']
const Item1 = ['Hội chợ triển lãm tiêu dùng 2021','Hội chợ triển lãm tiêu dùng 2022','Hội chợ triển lãm tiêu dùng 2023']

export default function BasicSelect({ type, sx }: SelectProps) {
  const classes = styles();
  const Data = type === 'outline'? Item1 : Item
  const InputClasses =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    type === "outline" ? useOutlinedInputStyles() : useInputStyles();
  const [value, setValue] = useState<string>(Data[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
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
          {Data.map((value,index)=>(<MenuItem key={index.toString()} value={value}>{value}</MenuItem>))}
          
        </Select>
      </FormControl>
    </Box>
  );
}
