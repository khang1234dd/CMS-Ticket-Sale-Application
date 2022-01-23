import React from 'react';
import './style.scss'
import BoxMain from '../../common/BoxMain/index'
import BoxDate from '../../common/BoxDate';
import AreaChart from '../../AreaChart';
import DonutChart from '../../DonutChart';
import { fontWeight } from '@mui/system';

const index = () => {
  return (
    <BoxMain header="Thống kê">
        <div className="subHeaderStyle">
            <div className="subHeaderStyle-subtext">Doanh thu</div>
            <div className="subHeaderStyle-date">
                <BoxDate></BoxDate>
            </div>
        </div>
        <div className="areaChartWrap">
          <AreaChart></AreaChart>
        </div>
        <div className="sub2Text">
          Tổng doanh thu theo tuần
        </div>
        <h2>
          525.145.000
          <span style={{fontWeight:400,fontSize:'0.875rem'}}> đồng</span>
        </h2>
        {/* <div className="donutChartWrap">
          <DonutChart></DonutChart>
        </div> */}
    </BoxMain>
  );
};

export default index;
