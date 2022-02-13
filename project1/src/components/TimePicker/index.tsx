import React from "react";
import "./style.scss";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import ButtonOutLineMui from "../common/ButtonOutLineMui";

const PrettoSlider = styled(Slider)({
  color: "#FF993C",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FF993C",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const TimePicker = () => {
  const [hour, setHour] = React.useState<
    number | string | Array<number | string>
  >(0);
  const [minute, setMinute] = React.useState<
    number | string | Array<number | string>
  >(0);
  const [second, setSecond] = React.useState<
    number | string | Array<number | string>
  >(0);

  const handleSliderHourChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setHour(newValue);
  };
  const handleSliderMinuteChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setMinute(newValue);
  };
  const handleSliderSecondChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setSecond(newValue);
  };

  const handleInputHourChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHour(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleInputMinuteChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMinute(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleInputSecondChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecond(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleVariableH = (value: any, setValue: any) => {
    if (value < 0) {
      setValue(0);
    } else if (value > 23) {
      setValue(23);
    }
  };

  const handleVariableMS = (value: any, setValue: any) => {
    if (value < 0) {
      setValue(0);
    } else if (value > 59) {
      setValue(59);
    }
  };
  return (
    <div className="TimePicker">
      <Stack
        direction="row"
        divider={<>:</>}
        justifyContent="center"
        alignItems="center"
        mt={1}
        mb={1}

      >
        <Input
          value={hour}
          size="small"
          onChange={handleInputHourChange}
          onBlur={() => handleVariableH(hour, setHour)}
          inputProps={{
            step: 10,
            min: 0,
            max: 23,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <Input
          value={minute}
          size="small"
          onChange={handleInputMinuteChange}
          onBlur={() => handleVariableMS(minute, setMinute)}
          inputProps={{
            step: 10,
            min: 0,
            max: 59,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <Input
          value={second}
          size="small"
          onChange={handleInputSecondChange}
          onBlur={() => handleVariableMS(second, setSecond)}
          inputProps={{
            step: 10,
            min: 0,
            max: 59,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </Stack>

      <Typography gutterBottom>Giờ</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={typeof hour === "number" ? hour : 0}
        onChange={handleSliderHourChange}
        max={23}
      />

      <Typography gutterBottom>Phút</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={typeof minute === "number" ? minute : 0}
        onChange={handleSliderMinuteChange}
        max={59}
      />

      <Typography gutterBottom>Giây</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={typeof second === "number" ? second : 0}
        onChange={handleSliderSecondChange}
        max={59}
      />

      <Stack justifyContent="center" alignItems="center" mt={2}>
          <ButtonOutLineMui style={{width:'60%'}}>Tạo</ButtonOutLineMui>
      </Stack>
      
    </div>
  );
};

export default TimePicker;
