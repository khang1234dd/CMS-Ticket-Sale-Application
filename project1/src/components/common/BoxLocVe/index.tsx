import React, { useEffect, useState } from "react";
import "./style.scss";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles, withStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Grid";
import BoxDate from "../../common/BoxDate";
import Select from "../../Select";
import ButtonOutLineMui from "../ButtonOutLineMui";
import { useDispatch, useSelector } from "react-redux";
import {addDateDoiSoatAction, changeSelectLocVe, changeSelectLocVeAction, getDataTableSuKien, locVeDoiSoat} from "../../../redux/actions/index"

const BoxLocVeStyle = {
  borderRadius: "24px",
  height: "auto",
  width: "22%",
  marginRight: "1.25rem",
  marginBottom: "1.25rem",
  backgroundColor: "#fff",
  padding: "1rem 1.5rem",
  minHeight: "85vh",
};

const StyleFormControlLabel = withStyles({
  label: {
    fontSize: 14
  },
})(FormControlLabel);

const StyleRadio = withStyles({
  root: {
    color: "#27AEF9",
    "&.Mui-checked": {
      color: "#27AEF9",
    },
  },
})(Radio);

const changeDataRadio = (radio:string) => {
  if(radio === "tatca"){
    return 0
  }else if(radio === "dadoisoat"){
    return 1
  }else if(radio === "chuadoisoat"){
    return 2
  }else {
    return 3
  }
}

const BoxLocVe = () => {
  const dataSelect = useSelector((state:any) => state.sukien.dataSuKien)
  const initTTDS = useSelector((state:any) => state.danhSachVe.ttds)
  console.log(initTTDS)
  const [radio,setRadio] = useState(initTTDS=== 0 ? "tatca" : initTTDS===1?"dadoisoat":"chuadoisoat")
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getDataTableSuKien())
  },[])
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };
  const handleClick =() =>{
    const dataRadio = changeDataRadio(radio)
    dispatch(locVeDoiSoat({ttds:dataRadio}))
    dispatch(addDateDoiSoatAction())
    dispatch(changeSelectLocVeAction())
  }

  
  return (
    <Box sx={BoxLocVeStyle}>
      <div className="BoxLocVe-title">L???c v??</div>
      <div className="BoxLocVe-marginTop-2">
        <Select action={changeSelectLocVe} dataSelect={dataSelect} type="outline"></Select>
      </div>
      <div className="BoxLocVe-marginTop-15">
        <FormControl className="BoxLocVe-formStyle">
          <FormLabel
            id="BoxLocVe-group"
            sx={{
              color: "#1E0D03",
              fontWeight: 600,
              width: "auto",
              marginRight: "1.5rem",
              fontSize: 14,
            }}
          >
            T??nh tr???ng ?????i so??t
          </FormLabel>
          <RadioGroup
            aria-labelledby="BoxLocVe-group"
            name="row-radio-buttons-group"
            className="BoxLocVe-radiolabel"
            value={radio}
            onChange={handleRadioChange}
          >
            <StyleFormControlLabel
              value="tatca"
              control={<StyleRadio />}
              label="T???t c???"
            />
            <StyleFormControlLabel
              value="dadoisoat"
              control={<StyleRadio />}
              label="???? ?????i so??t"
            />
            <StyleFormControlLabel
              value="chuadoisoat"
              control={<StyleRadio />}
              label="Ch??a ?????i so??t"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Grid sx={{ mt: "1.5rem" }} container direction="row">
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle BoxLocVe-fontStyle-bold">Lo???i v??</div>
        </Grid>
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle BoxLocVe-fontStyle-normal">V?? c???ng</div>
        </Grid>
      </Grid>

      <Grid sx={{ mt: "1.5rem" }} container direction="row" alignItems="center">
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle BoxLocVe-fontStyle-bold">T??? ng??y</div>
        </Grid>
        <Grid item xs={6}>
          <BoxDate type="tungaydoisoat" styleText={{fontSize: '0.75rem'}}></BoxDate>
        </Grid>
      </Grid>

      <Grid sx={{ mt: "1.5rem" }} container direction="row" alignItems="center">
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle BoxLocVe-fontStyle-bold">?????n ng??y</div>
        </Grid>
        <Grid item xs={6}>
          <BoxDate type="denngaydoisoat" styleText={{fontSize: '0.75rem'}}></BoxDate>
        </Grid>
      </Grid>
      <div className="BoxLocVe-marginTop-2 BoxLocVe-center">
          <ButtonOutLineMui style={{width: "50%"}} onClick={handleClick}>L???c</ButtonOutLineMui>
      </div>
    </Box>
  );
};

export default BoxLocVe;
