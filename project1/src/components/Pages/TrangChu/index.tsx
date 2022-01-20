import React from 'react';
import './style.scss'
import BoxMain from '../../common/BoxMain/index'
import BoxDate from '../../common/BoxDate';

const index = () => {
  return (
    <BoxMain header="Thống kê">
        <div className="subHeaderStyle">
            <div className="subHeaderStyle-subtext">Doanh thu</div>
            <div className="subHeaderStyle-date">
                <BoxDate></BoxDate>
            </div>
        </div>
    </BoxMain>
  );
};

export default index;
