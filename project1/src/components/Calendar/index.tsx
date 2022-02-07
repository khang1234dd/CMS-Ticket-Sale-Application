import React, { useState, useEffect } from "react";
import "./style.scss";
import moment from "moment";
import Grid from "@mui/material/Grid";
import {
  setup,
  dayStyle,
  weekStyle,
  dayOfWeekStyle,
  daySelectedStyle,
  formatMonthAndYear,
} from "./setup";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles, withStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import IconButton from '@mui/material/IconButton';


const StyleRadio = withStyles({
  root: {
    color: "#27AEF9",
    "&.Mui-checked": {
      color: "#27AEF9",
    },
  },
})(Radio);

const weekDay = ['T2','T3','T4','T5','T6','T7','CN']

const Calendar = () => {
  const [calendar, setCalendar] = useState<any>([]);
  const [value, setValue] = useState(moment());
  const [valueSave,setValueSave] = useState(moment())
  const [buttonRadio, setButtonRadio] = useState<String>("theongay");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonRadio(event.target.value);
  };
  const handleChangeNextMonth = () => {
    setValue(value.clone().add(1,"month"));
  };
  const handleChangePrevMonth = () => {
    setValue(value.clone().subtract(1,"month"));
  };

  const handleDayClick = (day:any)=> {
    setValue(day);
    setValueSave(day);
  }
  useEffect(() => {
    setCalendar(setup(value));
  }, [value]);

  return (
    <>
      <div className="Calendar">
        <div className="Calendar-wrap-month">
          <IconButton onClick={handleChangePrevMonth}><NavigateBeforeIcon/></IconButton>
            <div className="Calendar-month">{formatMonthAndYear(value)}</div>
            <IconButton onClick={handleChangeNextMonth}><NavigateNextIcon /></IconButton>
        </div>
        <RadioGroup
          row
          aria-labelledby="LocVeModal-group"
          name="row-radio-buttons-group"
          className="Calendar-wrap-radioButton"
          value={buttonRadio}
          onChange={handleChange}
          sx={{ width: "100%" }}
        >
          <FormControlLabel
            value="theongay"
            control={<StyleRadio />}
            label="Theo ngày"
          />
          <FormControlLabel
            value="theotuan"
            control={<StyleRadio />}
            label="Theo tuần"
          />
        </RadioGroup>

        <div className="Calendar-wrap">
          <div className="Calendar-header">
           {weekDay.map((day:any)=>(<div className="Calendar-header-item">{day}</div>))}
          </div>
          
          {calendar.map((week: any) => (
            <div
              className={`Calendar-week Calendar-week-${weekStyle(valueSave, week, buttonRadio)}`}
            >
              
              {week.map((day: any) => (
                <div onClick={()=>handleDayClick(day)}>
                  <div
                    className={`Calendar-day Calendar-day-${dayStyle(
                      value,
                      day
                    )} Calendar-day-${daySelectedStyle(
                      valueSave,
                      day,
                      buttonRadio
                    )} Calendar-week-${dayOfWeekStyle(
                      valueSave,
                      day,
                      buttonRadio
                    )} `}
                  >
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
