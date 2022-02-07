import React from "react";
import "./style.scss";
import BoxMain from "../../common/BoxMain/index";
import Search from "../../Search";
import ButtonOutLine from "../../common/ButtonOutLine";
import BoxLocVe from "../../common/BoxLocVe";




const DoiSoatVe = () => {
  return (
    <div className="DoiSoatVe-wrap">
      <BoxMain header="Đối soát vé" style={{ width: "55%" }}>
        <div className="subHeaderStyle">
          <Search name="Tìm bằng số vé"></Search>
          <div className="subHeaderStyle-btStyle">
            <ButtonOutLine style={{ backgroundColor: "#FF993C" }}>
              <div style={{ color: "#fff", fontSize: "1rem" }}>
                Chốt đối soát
              </div>
            </ButtonOutLine>
          </div>
        </div>
      </BoxMain>
      <BoxLocVe></BoxLocVe>
    </div>
  );
};

export default DoiSoatVe;
