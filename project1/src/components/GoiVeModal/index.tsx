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
import { useDispatch, useSelector } from "react-redux";
import { capNhatGoiVeValidator, themGoiVeValidator } from "../../helpers/validator";
import {ReactComponent as PointIcon} from "../../assets/svg/error.svg"
import { addDataTableGoiVe, changeSelectTinhTrang, updateDataTableGoiVe } from "../../redux/actions";

type GoiVeModalProps = {
  open: boolean | false;
  handleClose: () => void;
  type: "themgoive" | "capnhat";
  id?: string
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
const dataSelect = ['Đang áp dụng', 'Tắt']


const GoiVeModal = ({ open, handleClose, type,id }: GoiVeModalProps) => {
  const classes = useStyles();

  const tungay = useSelector((state:any) => state.time.dateRange.firstDate)
  const denngay = useSelector((state:any) => state.time.dateRange.lastDate)
  const selectTinhTrang = useSelector((state:any) => state.goiVe.selectTinhTrang)
  const [checked, setChecked] = useState([false, false]);
  const [showError, setShowError] = useState<any>({status: false, error: ""});
  const [showPointError, setShowPointError] = useState<string |undefined>('');

  const dispatch = useDispatch();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleSubmitThem = (e: any) => {
    e.preventDefault()
    const ten = e.target.tengoive.value
    const giave = e.target.giavele.value
    const giacombo= e.target.giavecombo.value
    const sove= e.target.sove.value
    const tinhtrang = selectTinhTrang === "Đang áp dụng"? true : selectTinhTrang === "Tắt" ? false : undefined

    const isValidator = themGoiVeValidator(ten,giave,giacombo,sove,checked,tinhtrang)

    if(isValidator.success){
      console.log("success", isValidator.success)
      setShowPointError('')
      setShowError({...showError, status: false})
      dispatch(addDataTableGoiVe({ten,giave,giacombo,sove,ngayapdung:tungay,ngayhethan:denngay,tinhtrang}))
      handleClose()
    }else{
      console.log(isValidator)
      setShowPointError(isValidator.field)
      setShowError({status: true,error: isValidator.message})
    }

  }

  const handleSubmitCapNhat = (e: any) => {
    e.preventDefault()
    const ma = e.target.masukien.value
    const ten = e.target.tensukien.value
    const giave = e.target.giavele.value
    const giacombo= e.target.giavecombo.value
    const sove= e.target.sove.value

    const tinhtrang = selectTinhTrang === "Đang áp dụng"? true : selectTinhTrang === "Tắt" ? false : undefined

    const isValidator = capNhatGoiVeValidator(ma,ten,giave,giacombo,sove,checked,tinhtrang)

    if(isValidator.success){
      console.log("success", isValidator.success)
      setShowPointError('')
      setShowError({...showError, status: false})
      dispatch(updateDataTableGoiVe({id,ma,ten,giave,giacombo,sove,ngayapdung:tungay,ngayhethan:denngay,tinhtrang}))
      handleClose()

    }else{
      console.log(isValidator)
      setShowPointError(isValidator.field)
      setShowError({status: true,error: isValidator.message})
    }

  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={type==="themgoive"?handleSubmitThem: handleSubmitCapNhat}>
        {type === "themgoive" ? (
          <div className="GoiVeModal-title">Thêm gói vé </div>
        ) : (
          <div className="GoiVeModal-title">Cập nhật thông tin gói vé</div>
        )}

        {type === "themgoive" ? (
          <Grid container mt={3}>
            <div className="GoiVeModal-subtitle">Tên gói vé {showPointError === "tengoive"?<PointIcon />:<></>}</div>
          </Grid>
        ) : (
          <Grid container spacing={1} mt={3}>
            <Grid xs={6} item>
              <div className="GoiVeModal-subtitle">Mã sự kiện {showPointError === "masukien"?<PointIcon />:<></>}</div>
            </Grid>
            <Grid xs item>
              <div className="GoiVeModal-subtitle">Tên sự kiện {showPointError === "tensukien"?<PointIcon />:<></>}</div>
            </Grid>
          </Grid>
        )}

        {type === "themgoive" ? (
          <Grid container spacing={1} mt={0.5}>
            <Grid xs={6} item>
              <Input1 name="tengoive" placeholder="Nhập tên gói vé"></Input1>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={1} mt={0.5}>
            <Grid xs={6} item>
              <Input1
                style={{ width: "80%" }}
                name="masukien"
                placeholder="Nhập mã sự kiện..."
              ></Input1>
            </Grid>
            <Grid xs item>
              <Input1 name="tensukien" placeholder="Nhập tên sự kiện..."></Input1>
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
            <BoxDate type="rangeFirst" style={{ marginRight: "6px", ...StyleBoxDate }}></BoxDate>
            <BoxTime type="rangeFirst" style={StyleBoxDate}></BoxTime>
          </Grid>

          <Grid xs={6} container item direction="row">
            <BoxDate type="rangeLast" style={{ marginRight: "6px", ...StyleBoxDate }}></BoxDate>
            <BoxTime type="rangeLast" style={StyleBoxDate}></BoxTime>
          </Grid>
        </Grid>

        {/* <div className="LocVeModal-subtitle-bold LocVeModal-marginTop1">Tình trạng sử dụng</div> */}

        <FormControl sx={{ mt: 2.5, width: "100%" }}>
          <FormLabel
            id="GoiVeModal-group-checkbox"
            sx={{ color: "#1E0D03", fontWeight: 500 }}
          >
            Giá vé áp dụng {showPointError === "giavele" || showPointError === "giavecombo" || showPointError === "sove" ?<PointIcon />:<></>}
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
                    <Input name="giavele" style={{ width: "40%" }} placeholder="Giá vé" readOnly={checked[0]? false :true } />
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
                    <Input name="giavecombo" style={{ width: "30%" }} placeholder="Giá vé" readOnly={checked[1]? false :true }/>
                    &nbsp; / &nbsp;
                    <Input name="sove" style={{ width: "20%" }} placeholder="Số vé" readOnly={checked[1]? false :true } />
                    &nbsp;vé
                  </>
                }
              />
            </Grid>
          </Grid>
        </FormControl>

        <Grid container spacing={1} mt={2} direction="column">
          <Grid xs item>
            <div className="LocVeModal-subtitle">Tình trạng {showPointError === "tinhtrang"?<PointIcon />:<></>}</div>
          </Grid>
          <Grid xs item>
            <Select action={changeSelectTinhTrang} dataSelect={dataSelect} sx={{ width: "30%" }} type="basic"></Select>
          </Grid>
          {showError.status ?
          <Grid xs item>
             <em style={{color:"silver" }}><PointIcon /> {showError.error} </em>
          </Grid>
          : <></>
            }
        </Grid>

        <div className="GoiVeModal-buttonwrap GoiVeModal-marginTop2">
          <ButtonOutLineMui style={{ ...StyleButton }} onClick={handleClose}>Hủy</ButtonOutLineMui>
          <ButtonOutLineMui type="submit" style={{ ...StyleButton, ...StyleButton1 }}>
            Lưu
          </ButtonOutLineMui>
        </div>
      </Box>
    </Modal>
  );
};

export default GoiVeModal;
