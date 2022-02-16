import React, { useState } from "react";
import "./style.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import BoxDate from "../common/BoxDate";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles, withStyles } from "@mui/styles";
import ButtonOutLineMui from "../common/ButtonOutLineMui";
import { useDispatch, useSelector } from "react-redux";
import { addDateDSVAction, locVe } from "../../redux/actions";

type LocVeModalProps = {
  open: boolean | false;
  handleClose: () => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

const StyleRadio = withStyles({
  root: {
    color: "#27AEF9",
    "&.Mui-checked": {
      color: "#27AEF9",
    },
  },
})(Radio);

const StyleCheckBox = withStyles({
  root: {
    color: "#27AEF9",
    "&.Mui-checked": {
      color: "#27AEF9",
    },
  },
})(Checkbox);

const changeDataRadio = (radio:string) => {
  if(radio === "tatca"){
    return 0
  }else if(radio === "dasudung"){
    return 1
  }else if(radio === "chuasudung"){
    return 2
  }else {
    return 3
  }
}

const LocVeModal = ({ open, handleClose }: LocVeModalProps) => {
  const initTTSD = useSelector((state:any) => state.danhSachVe.ttsd)
  const initCong = useSelector((state:any) => state.danhSachVe.cong)
  const [radio,setRadio] = useState(initTTSD === 0? "tatca" : initTTSD === 1 ? "dasudung" : "chuasudung")
  
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(initCong);
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, false, false, false, false, false]);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      checked[0],
      event.target.checked,
      checked[2],
      checked[3],
      checked[4],
      checked[5],
    ]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      checked[0],
      checked[1],
      event.target.checked,
      checked[3],
      checked[4],
      checked[5],
    ]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      event.target.checked,
      checked[4],
      checked[5],
    ]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      checked[3],
      event.target.checked,
      checked[5],
    ]);
  };

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      checked[3],
      checked[4],
      event.target.checked,
    ]);
  };

  const handleClick = () =>{
    const dataRadio = changeDataRadio(radio)
    dispatch(locVe({ttsd: dataRadio, cong: checked}))
    dispatch(addDateDSVAction)
    handleClose()
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="LocVeModal-title">Lọc vé</div>
        <Grid container spacing={1} mt={3}>
          <Grid xs={5} item>
            <div className="LocVeModal-subtitle">Từ ngày</div>
          </Grid>
          <Grid xs item>
            <div className="LocVeModal-subtitle">Đến ngày</div>
          </Grid>
        </Grid>

        <Grid container spacing={1} mt={0.5}>
          <Grid xs={5} item>
            <BoxDate type="tungaydsv"></BoxDate>
          </Grid>
          <Grid xs item>
            <BoxDate type="denngaydsv"></BoxDate>
          </Grid>
        </Grid>

        {/* <div className="LocVeModal-subtitle-bold LocVeModal-marginTop1">Tình trạng sử dụng</div> */}
        <FormControl sx={{ mt: 2.875 }}>
          <FormLabel
            id="LocVeModal-group"
            sx={{ color: "#1E0D03", fontWeight: 500 }}
          >
            Tình trạng sử dụng
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="LocVeModal-group"
            name="row-radio-buttons-group"
            className="LocVeModal-radiolabel"
            value={radio}
            onChange={handleChangeRadio}
          >
            <FormControlLabel
              value="tatca"
              control={<StyleRadio />}
              label="Tất cả"
            />
            <FormControlLabel
              value="dasudung"
              control={<StyleRadio />}
              label="Đã sử dụng"
            />
            <FormControlLabel
              value="chuasudung"
              control={<StyleRadio />}
              label="Chưa sử dụng"
            />
            <FormControlLabel
              value="hethan"
              // disabled
              control={<StyleRadio className="LocVeModal-radioColors" />}
              label="Hết hạn"
            />
          </RadioGroup>
        </FormControl>

        <FormControl sx={{ mt: 2.875 }}>
          <FormLabel
            id="LocVeModal-group-checkbox"
            sx={{ color: "#1E0D03", fontWeight: 500 }}
          >
            Cổng Check - in
          </FormLabel>
          <Grid container spacing={1}>
            <Grid container item>
              <Grid item xs={4}>
                <FormControlLabel
                  value="0"
                  control={
                    <StyleCheckBox
                      checked={checked[0]}
                      onChange={handleChange}
                    />
                  }
                  label="Tất cả"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="1"
                  control={
                    <StyleCheckBox
                      checked={!checked[0] ? checked[1] : false}
                      onChange={handleChange1}
                    />
                  }
                  label="Cổng 1"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="2"
                  control={
                    <StyleCheckBox
                    checked={!checked[0] ? checked[2] : false}
                      onChange={handleChange2}
                    />
                  }
                  label="Cổng 2"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={4}>
                <FormControlLabel
                  value="3"
                  control={
                    <StyleCheckBox
                    checked={!checked[0] ? checked[3] : false}
                      onChange={handleChange3}
                    />
                  }
                  label="Cổng 3"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="4"
                  control={
                    <StyleCheckBox
                    checked={!checked[0] ? checked[4] : false}
                      onChange={handleChange4}
                    />
                  }
                  label="Cổng 4"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="5"
                  control={
                    <StyleCheckBox
                    checked={!checked[0] ? checked[5] : false}
                      onChange={handleChange5}
                    />
                  }
                  label="Cổng 5"
                />
              </Grid>
            </Grid>
          </Grid>
        </FormControl>

        <div className="LocVeModal-buttonwrap LocVeModal-marginTop2">
          <ButtonOutLineMui style={{width:'40%', height:'80%'}} onClick={handleClick}>Lọc</ButtonOutLineMui>
        </div>
      </Box>
    </Modal>
  );
};

export default LocVeModal;
