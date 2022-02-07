import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

const styles = makeStyles({
  outlined: {
    "& .MuiSelect-outlined": {
      borderWidth: "0",
    },
  },
});

const useOutlinedInputStyles = makeStyles(theme => ({
    root: {
      "& $notchedOutline": {
        border: "none"
      },
    },
    focused: {},
    notchedOutline: {}
  }));

export default function BasicSelect() {
  const classes = styles();
  const outlinedInputClasses  = useOutlinedInputStyles();
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: "20%" }}>
      <FormControl sx={{ width: "90%", border: "none" }}>
        <Select
          classes={{ outlined: classes.outlined }}
          value={value}
          onChange={handleChange}
          displayEmpty
          sx={{ backgroundColor: "#F1F4F8", border: "none" }}
          inputProps={{ "aria-label": "Without label" }}
          input={
            <OutlinedInput
              classes={outlinedInputClasses}
            />
          }
        >
          <MenuItem value={1}>Hội chợ triển lãm tiêu dùng 2021</MenuItem>
          <MenuItem value={2}>Hội chợ triển lãm tiêu dùng 2022</MenuItem>
          <MenuItem value={3}>Hội chợ triển lãm tiêu dùng 2023</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
