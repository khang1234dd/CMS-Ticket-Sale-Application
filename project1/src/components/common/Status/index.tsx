import React from "react";
import "./style.scss";

type statusProps = {
  status: 'dasudung' | 'hethan' | 'chuasudung' | 'dangapdung' | 'tat';
  style?: React.CSSProperties | {};
};

const index = ({ status, style }: statusProps) => {
  return (
    <>
      {status === "dasudung" ? (
        <div className="wrapMainStatus" style={style}>
          <div className="circle"></div>
          <div className="textStatusStyle">Đã sử dụng</div>
        </div>
      ) : status === "hethan" ? (
        <div className="wrapMainStatus wrapMainStatus-red" style={style}>
          <div className="circle circle-red"></div>
          <div className="textStatusStyle textStatusStyle-red">Hết hạn</div>
        </div>
      ) : status === "chuasudung" ?(
        <div className="wrapMainStatus wrapMainStatus-green" style={style}>
          <div className="circle circle-green"></div>
          <div className="textStatusStyle textStatusStyle-green">Chưa sử dụng</div>
        </div>
      ): status === "dangapdung" ? (
        <div className="wrapMainStatus wrapMainStatus-green" style={style}>
          <div className="circle circle-green"></div>
          <div className="textStatusStyle textStatusStyle-green">Đang áp dụng</div>
        </div>
      ): (
        <div className="wrapMainStatus wrapMainStatus-red" style={style}>
          <div className="circle circle-red"></div>
          <div className="textStatusStyle textStatusStyle-red">Tắt</div>
        </div>
      )
    }
    </>
  );
};

export default index;
