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
import Input from "../common/Input";
import Input1 from "../common/Input1";
import Select from "../Select";
import BoxTime from "../common/BoxTime";

type GoiVeModalProps = {
  open: boolean | false;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "themgoive" | "capnhat";
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

const StyleCheckBox = withStyles({
  root: {
    color: "#27AEF9",
    "&.Mui-checked": {
      color: "#27AEF9",
    },
  },
})(Checkbox);

const useStyles = makeStyles((theme) => ({
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const StyleBoxDate = {
  border: "1px solid #A5A8B1",
  borderRadius: "8px",
  width: "45%",
};

const StyleButton = {
  width: "25%",
  height: "80%",
  margin: "0 10px",
};

const StyleButton1 = {
  background: "#FF993C",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#cc7a30",
  },
};

const GoiVeModal = ({ open, handleClose, type }: GoiVeModalProps) => {
  const classes = useStyles();

  const [checked, setChecked] = useState([true, false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, false]);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([false, event.target.checked]);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {type === "themgoive" ? (
          <div className="GoiVeModal-title">Thêm gói vé</div>
        ) : (
          <div className="GoiVeModal-title">Cập nhật thông tin gói vé</div>
        )}

        {type === "themgoive" ? (
          <Grid container mt={3}>
            <div className="GoiVeModal-subtitle">Tên gói vé</div>
          </Grid>
        ) : (
          <Grid container spacing={1} mt={3}>
            <Grid xs={6} item>
              <div className="GoiVeModal-subtitle">Mã sự kiện</div>
            </Grid>
            <Grid xs item>
              <div className="GoiVeModal-subtitle">Tên sự kiện</div>
            </Grid>
          </Grid>
        )}

        {type === "themgoive" ? (
          <Grid container spacing={1} mt={0.5}>
            <Grid xs={6} item>
              <Input1 placeholder="Nhập tên gói vé"></Input1>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={1} mt={0.5}>
            <Grid xs={6} item>
              <Input1
                style={{ width: "80%" }}
                placeholder="Nhập mã sự kiện..."
              ></Input1>
            </Grid>
            <Grid xs item>
              <Input1 placeholder="Nhập tên sự kiện..."></Input1>
            </Grid>
          </Grid>
        )}

        <Grid container spacing={1} mt={2}>
          <Grid xs={6} item>
            <div className="LocVeModal-subtitle">Từ ngày</div>
          </Grid>
          <Grid xs item>
            <div className="LocVeModal-subtitle">Đến ngày</div>
          </Grid>
        </Grid>

        <Grid container spacing={1} mt={0.5}>
          <Grid xs={6} container item direction="row">
            <BoxDate style={{ marginRight: "6px", ...StyleBoxDate }}></BoxDate>
            <BoxTime style={StyleBoxDate}></BoxTime>
          </Grid>

          <Grid xs={6} container item direction="row">
            <BoxDate style={{ marginRight: "6px", ...StyleBoxDate }}></BoxDate>
            <BoxTime style={StyleBoxDate}></BoxTime>
          </Grid>
        </Grid>

        {/* <div className="LocVeModal-subtitle-bold LocVeModal-marginTop1">Tình trạng sử dụng</div> */}

        <FormControl sx={{ mt: 2.5, width: "100%" }}>
          <FormLabel
            id="GoiVeModal-group-checkbox"
            sx={{ color: "#1E0D03", fontWeight: 500 }}
          >
            Giá vé áp dụng
          </FormLabel>
          <Grid container direction="column" spacing={1}>
            <Grid item xs>
              <FormControlLabel
                value="0"
                control={
                  <StyleCheckBox checked={checked[0]} onChange={handleChange} />
                }
                classes={classes}
                label={
                  <>
                    Vé lẻ (vnđ/vé) với giá &nbsp;
                    <Input style={{ width: "40%" }} placeholder="Giá vé" />
                    &nbsp; / vé
                  </>
                }
              />
            </Grid>
            <Grid item xs>
              <FormControlLabel
                value="1"
                control={
                  <StyleCheckBox
                    checked={checked[1]}
                    onChange={handleChange1}
                  />
                }
                classes={classes}
                label={
                  <>
                    Combo vé với giá &nbsp;
                    <Input style={{ width: "30%" }} placeholder="Giá vé" />
                    &nbsp; / &nbsp;
                    <Input style={{ width: "20%" }} placeholder="Giá vé" />
                    &nbsp;vé
                  </>
                }
              />
            </Grid>
          </Grid>
        </FormControl>

        <Grid container spacing={1} mt={2} direction="column">
          <Grid xs item>
            <div className="LocVeModal-subtitle">Tình trạng</div>
          </Grid>
          <Grid xs item>
            <Select sx={{ width: "30%" }} type="basic"></Select>
          </Grid>
        </Grid>

        <div className="GoiVeModal-buttonwrap GoiVeModal-marginTop2">
          <ButtonOutLineMui style={{ ...StyleButton }}>Hủy</ButtonOutLineMui>
          <ButtonOutLineMui style={{ ...StyleButton, ...StyleButton1 }}>
            Lưu
          </ButtonOutLineMui>
        </div>
      </Box>
    </Modal>
  );
};

export default GoiVeModal;
