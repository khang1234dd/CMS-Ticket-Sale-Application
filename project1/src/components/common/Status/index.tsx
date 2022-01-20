import React from 'react';
import './style.scss'

type statusProps ={
    status: string
}

const index = ({status}:statusProps ) => {
  return (<div className="wrapMain">
  <div className="circle"></div>
  <div className="textStyle">Đã sử dụng</div>
</div>)
    
};

export default index;
{/* <div className="wrapMain">
        <div className="circle"></div>
        <div className="textStyle">Đã sử dụng</div>
    </div>
    )
    :status ==='hethan'?
        <div className="wrapMain">
            <div className="circle"></div>
            <div className="textStyle">Đã sử dụng</div>
        </div>
    :<div className="wrapMain">
        <div className="circle"></div>
        <div className="textStyle">Đã sử dụng</div>
    </div> */}