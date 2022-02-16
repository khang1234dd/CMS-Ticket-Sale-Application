import React, { useEffect, useState } from "react";
import "./style.scss";
import BoxMain from "../../common/BoxMain/index";
import Search from "../../Search";
import ButtonOutLine from "../../common/ButtonOutLine";
import BoxLocVe from "../../common/BoxLocVe";
import Table from "../../Table";
import { useDispatch, useSelector } from "react-redux";
import {
  changePageDoiSoat,
  chotDoiSoat,
  getDataTableDoiSoat,
  getDataTablePaginationDoiSoat,
  updateDataSearchDoiSoat,
} from "../../../redux/actions";
import Pagination from "../../Pagination";



const DoiSoatVe = () => {
  const dispatch = useDispatch();
  const dataTable = useSelector(
    (state: any) => state.danhSachVe.dataTableDoiSoat
  );
  const tensukien = useSelector((state: any) => state.sukien.selectLocVeAction);
  const dateTuNgay = useSelector(
    (state: any) => state.time.dateTuNgayDoiSoatAction
  );
  const dateDenNgay = useSelector(
    (state: any) => state.time.dateDenNgayDoiSoatAction
  );
  const ttds = useSelector((state: any) => state.danhSachVe.ttds);

  const dataTablePagination = useSelector(
    (state: any) => state.danhSachVe.dataPaginationDoiSoat
  );
  const page = useSelector((state: any) => state.danhSachVe.pageDoiSoat);
  const limit = useSelector((state: any) => state.danhSachVe.limitDoiSoat);
  const totalRowsDoiSoat = useSelector(
    (state: any) => state.danhSachVe.totalRowsDoiSoat
  );

  const reloadLocVeDoiSoat = useSelector(
    (state: any) => state.danhSachVe.reloadLocVeDoiSoat
  );

  const dataSearchDoiSoat = useSelector(
    (state: any) => state.danhSachVe.dataSearchDoiSoat
  );
  const search = useSelector((state: any) => state.danhSachVe.searchDoiSoat);
  const showDoiSoat = useSelector((state: any) => state.danhSachVe.showDoiSoat);
  useEffect(() => {
    dispatch(getDataTableDoiSoat(tensukien, dateTuNgay, dateDenNgay, ttds));
  }, [reloadLocVeDoiSoat, dateTuNgay, dateDenNgay, tensukien]);

  useEffect(() => {
    dispatch(getDataTablePaginationDoiSoat(dataTable, page, limit));
  }, [dataTable, limit, page]);

  const handleClick = () => {
    dispatch(chotDoiSoat(dataTablePagination));
  };

  return (
    <div className="DoiSoatVe-wrap">
      <BoxMain header="Đối soát vé" style={{ width: "55%" }}>
        <div className="subHeaderStyle">
          <Search
            data={dataTable}
            action={updateDataSearchDoiSoat}
            search={search}
            type="searchSoVe"
            name="Tìm bằng số vé"
          ></Search>
          <div className="subHeaderStyle-btStyle">
            {showDoiSoat ? (
              <ButtonOutLine
                style={{ backgroundColor: "#FF993C" }}
                onClick={handleClick}
              >
                <div style={{ color: "#fff", fontSize: "1rem" }}>
                  Chốt đối soát
                </div>
              </ButtonOutLine>
            ) : (
              <ButtonOutLine style={{ marginRight: "1rem" }}>
                <div style={{ fontSize: "1rem" }}>Xuất file (.csv)</div>
              </ButtonOutLine>
            )}
          </div>
        </div>
        <div className="DoiSoatVe-table-margin2">
          {search === "" ? (
            <Table dataTable={dataTablePagination} type="doisoatve"></Table>
          ) : (
            <Table dataTable={dataSearchDoiSoat} type="doisoatve"></Table>
          )}
        </div>
        {search === "" ? (
          <Pagination
            totalRows={totalRowsDoiSoat}
            page={page}
            limit={limit}
            action={changePageDoiSoat}
          ></Pagination>
        ) : (
          <></>
        )}
      </BoxMain>
      <BoxLocVe></BoxLocVe>
    </div>
  );
};

export default DoiSoatVe;
