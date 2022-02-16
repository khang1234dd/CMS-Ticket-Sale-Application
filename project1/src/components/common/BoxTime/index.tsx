import React, { useEffect, useState } from "react";
import "./style.scss";
import { ReactComponent as ClockIcon } from "../../../assets/svg/clock.svg";
import { IconButton, Popover } from "@mui/material";
import Calendar from "../../Calendar";
import { makeStyles, withStyles } from "@mui/styles";
import TimePicker from "../../TimePicker";
import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "../../../utils/formatDate";
import { addTimeRangeFirst, addTimeRangeLast, addTimeSingle } from "../../../redux/actions";


type BoxTimeProps = {
  style?: React.CSSProperties | {};
  styleText?: React.CSSProperties | {};
  type: "rangeFirst" | "rangeLast" | "single";
};

const StylePopover = withStyles({
  root: {
    "&	.MuiPopover-paper": {
      borderRadius: "20px",
    },
  },
})(Popover);

const BoxTime = ({ style, styleText, type }: BoxTimeProps) => {
  const timeData = useSelector((state: any) => state.time.dateRange);
  const timeSingleData = useSelector((state: any) => state.time.dateSingle);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const typeTimeData = (type:string) =>{
    if(type==="rangeFirst")
      return timeData.firstDate
    else if(type==="rangeLast")
      return timeData.lastDate
    else{
      return timeSingleData
    }
  }
  const typeTimeAction = (type:string) =>{
    if(type==="rangeFirst")
      return addTimeRangeFirst
    else if(type==="rangeLast")
      return addTimeRangeLast
    else{
      return addTimeSingle
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="BoxTime" style={style}>
        <div className="BoxTime-text" style={styleText}>
          {formatTime(typeTimeData(type))}
        </div>
      <IconButton onClick={handleClick}>
        <ClockIcon></ClockIcon>
      </IconButton>
      <StylePopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TimePicker action={typeTimeAction(type)} handleClose={handleClose} time={typeTimeData(type)}></TimePicker>
      </StylePopover>
    </div>
  );
};

export default BoxTime;
