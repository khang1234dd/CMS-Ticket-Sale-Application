import React from 'react';
import './style.scss'
import {ReactComponent as DatePickerIcon} from '../../../assets/svg/datepicker.svg'

const index = () => {
  return (
    <div className="boxdate">
        <div className="boxdate-text">Tháng 4, 2021</div>
        <DatePickerIcon></DatePickerIcon>

    </div>
  );
};

export default index;
