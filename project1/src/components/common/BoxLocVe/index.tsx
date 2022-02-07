import React from "react";
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

const BoxLocVeStyle = {
  borderRadius: "24px",
  height: "auto",
  width: "25%",
  marginRight: "1.25rem",
  marginBottom: "1.25rem",
  backgroundColor: "#fff",
  padding: "1rem 1.5rem",
  minHeight: "85vh",
};

const StyleRadio = withStyles({
  root: {
    color: "#27AEF9",
    "&.Mui-checked": {
      color: "#27AEF9",
    },
  },
})(Radio);

const BoxLocVe = () => {
  return (
    <Box sx={BoxLocVeStyle}>
      <div className="BoxLocVe-title">Lọc vé</div>
      <div className="BoxLocVe-marginTop-2">
        <Select></Select>
      </div>
      <div className="BoxLocVe-marginTop-15">
        <FormControl className="BoxLocVe-formStyle">
          <FormLabel
            id="LocVeModal-group"
            sx={{
              color: "#1E0D03",
              fontWeight: 600,
              width: "auto",
              marginRight: "1.5rem",
            }}
          >
            Tình trạng đối soát
          </FormLabel>
          <RadioGroup
            aria-labelledby="LocVeModal-group"
            name="row-radio-buttons-group"
            className="LocVeModal-radiolabel"
          >
            <FormControlLabel
              value="0"
              control={<StyleRadio />}
              label="Tất cả"
            />
            <FormControlLabel
              value="1"
              control={<StyleRadio />}
              label="Đã đối soát"
            />
            <FormControlLabel
              value="2"
              control={<StyleRadio />}
              label="Chưa đối soát"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Grid sx={{ mt: "1.5rem" }} container direction="row">
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle-bold">Loại vé</div>
        </Grid>
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle-normal">Vé cổng</div>
        </Grid>
      </Grid>

      <Grid sx={{ mt: "1.5rem" }} container direction="row" alignItems="center">
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle-bold">Từ ngày</div>
        </Grid>
        <Grid item xs={6}>
          <BoxDate></BoxDate>
        </Grid>
      </Grid>

      <Grid sx={{ mt: "1.5rem" }} container direction="row" alignItems="center">
        <Grid item xs={6}>
          <div className="BoxLocVe-fontStyle-bold">Đến ngày</div>
        </Grid>
        <Grid item xs={6}>
          <BoxDate></BoxDate>
        </Grid>
      </Grid>
      <div className="BoxLocVe-marginTop-2 BoxLocVe-center">
          <ButtonOutLineMui style={{width: "50%"}}>Lọc</ButtonOutLineMui>
      </div>
    </Box>
  );
};

export default BoxLocVe;
