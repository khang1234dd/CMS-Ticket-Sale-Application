import React, { useState } from "react";
import "./style.scss";
import { ReactComponent as DatePickerIcon } from "../../../assets/svg/datepicker.svg";
import { IconButton,Popover } from "@mui/material";
import Calendar from "../../Calendar";
import { makeStyles, withStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { formatDate, formatDate1 } from "../../../utils/formatDate";
import { addDateDenNgayDoiSoat, addDateDenNgayDSV, addDateRangeFirst, addDateRangeLast, addDateSingle, addDateSingleSoVe, addDateTuNgayDoiSoat, addDateTuNgayDSV } from "../../../redux/actions";

type BoxDateProps = {
  style?: React.CSSProperties | {}
  styleText?:React.CSSProperties | {}
  type: 'rangeFirst' | 'rangeLast' | 'single' | 'singleSoVe' |'tungaydsv' | 'denngaydsv' | 'tungaydoisoat' | 'denngaydoisoat' 
  useFormatDate?:boolean
}

const StylePopover = withStyles({
  root: {
    "&	.MuiPopover-paper": {
      borderRadius: '20px'
    },
  },
})(Popover);

const BoxDate = ({style,styleText,type,useFormatDate}:BoxDateProps) => {
  const dateData = useSelector((state: any) => state.time.dateRange)
  const dateSingleData = useSelector((state: any) => state.time.dateSingle)
  const dateSingleDataSoVe = useSelector((state: any) => state.time.dateSingleSoVe)
  const dateDenNgayDSVData = useSelector((state: any) => state.time.dateDenNgayDSV)
  const dateTuNgayDSVData = useSelector((state: any) => state.time.dateTuNgayDSV)
  const dateDenNgayDoiSoatData = useSelector((state: any) => state.time.dateDenNgayDoiSoat)
  const dateTuNgayDoiSoatData = useSelector((state: any) => state.time.dateTuNgayDoiSoat)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const typeDateData = (type:string) =>{
    if(type==="rangeFirst")
      return dateData.firstDate
    else if(type==="rangeLast")
      return dateData.lastDate
    else if(type==='single'){
      return dateSingleData
    }
    else if(type==='singleSoVe'){
      return dateSingleDataSoVe
    }
    else if(type==='tungaydsv'){
      return dateTuNgayDSVData
    }
    else if(type==='denngaydsv'){
      return dateDenNgayDSVData
    }else if(type==='denngaydoisoat'){
      return dateDenNgayDoiSoatData
    }else if(type==='tungaydoisoat'){
      return dateTuNgayDoiSoatData
    }
  }

  const typeDateAction = (type:string) =>{
    if(type==="rangeFirst")
      return addDateRangeFirst
    else if(type==="rangeLast")
      return addDateRangeLast
    else if(type ==="single"){
      return addDateSingle
    }
    else if(type==='singleSoVe'){
      return addDateSingleSoVe
    }
    else if(type==="tungaydsv"){
      return addDateTuNgayDSV
    }
    else if(type === "denngaydsv"){
      return addDateDenNgayDSV
    }else if(type === "denngaydoisoat"){
      return addDateDenNgayDoiSoat
    }
    else{
      return addDateTuNgayDoiSoat
    }
  }

  return (
    <div className="boxdate" style={style}>
      
      {useFormatDate?<div className="boxdate-text" style={styleText}>{formatDate1(typeDateData(type))}</div>
      :<div className="boxdate-text" style={styleText}>{formatDate(typeDateData(type))}</div>}
      <IconButton onClick={handleClick}>
        <DatePickerIcon></DatePickerIcon>
      </IconButton>
      <StylePopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Calendar data={typeDateData(type)} action={typeDateAction(type)}></Calendar>
      </StylePopover>
    </div>
  );
};

export default BoxDate;
