import React, { useEffect } from "react";
import "./style.scss";
import BoxMain from "../../common/BoxMain/index";
import Search from "../../Search";
import ButtonOutLine from "../../common/ButtonOutLine";
import BoxLocVe from "../../common/BoxLocVe";
import Table from "../../Table";
import { useDispatch, useSelector } from "react-redux";
import { getDataTableDSV } from "../../../redux/actions";
import Pagination from "../../Pagination";




const DoiSoatVe = () => {
  const dispatch = useDispatch();

  const dataTable = useSelector((state:any) => state.danhSachVe.dataTable)
  

  useEffect(() =>{
      // dispatch(addDataTableDSV(rows))
      // (setTimeout(() => dispatch(getDataTableDSV()),2000))
      dispatch(getDataTableDSV())
      console.log('dataTable - view =>',dataTable)
  },[])

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
        <div className="DoiSoatVe-table-margin2">
          <Table dataTable={dataTable} type="doisoatve"></Table>
        </div>
        <Pagination></Pagination>
      </BoxMain>
      <BoxLocVe></BoxLocVe>
    </div>
  );
};

export default DoiSoatVe;
