import React, { useState } from "react";
import "./style.scss";
import { ReactComponent as DatePickerIcon } from "../../../assets/svg/datepicker.svg";
import { IconButton,Popover } from "@mui/material";
import Calendar from "../../Calendar";
import { makeStyles, withStyles } from "@mui/styles";

const StylePopover = withStyles({
  root: {
    "&	.MuiPopover-paper": {
      borderRadius: '20px'
    },
  },
})(Popover);

const BoxDate = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="boxdate">
      <div className="boxdate-text">Tháng 4, 2021</div>
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
        <Calendar></Calendar>
      </StylePopover>
    </div>
  );
};

export default BoxDate;
