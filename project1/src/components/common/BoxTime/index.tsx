import React, { useState } from "react";
import "./style.scss";
import { ReactComponent as ClockIcon } from "../../../assets/svg/clock.svg";
import { IconButton, Popover } from "@mui/material";
import Calendar from "../../Calendar";
import { makeStyles, withStyles } from "@mui/styles";
import TimePicker from "../../TimePicker";

type BoxTimeProps = {
  style?: React.CSSProperties | {};
  styleText?: React.CSSProperties | {};
};

const StylePopover = withStyles({
  root: {
    "&	.MuiPopover-paper": {
      borderRadius: "20px",
    },
  },
})(Popover);

const BoxTime = ({ style, styleText }: BoxTimeProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="BoxTime" style={style}>
      <div className="BoxTime-text" style={styleText}>
        00:00:00
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
        <TimePicker></TimePicker>
      </StylePopover>
    </div>
  );
};

export default BoxTime;
