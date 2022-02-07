import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Status from "../common/Status";

type TableProps = {
  dataTable: Array<any>;
  type: "quanlyve" | "doisoatve" | "caidat";
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F1F4F8",
    color: "#1E0D03",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(2n)": {
    backgroundColor: "#F7F8FB",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: "none",
  },
}));

const tableStyle = makeStyles({
  table: {
    boxShadow: "none",
    "& .MuiTableContainer-root": {
      borderRadius: "8px",
      border: 0,
    },
    "& .MuiTableCell-root": {
      border: 0,
    },
  },
  cell: {
    "& .MuiTableCell-root": {
      fontFamily: "Montserrat, sans-serif",
      border: 0,
    },
  },
});

export default function CustomizedTables({ dataTable, type }: TableProps) {
  const classes = tableStyle();

  const renderTTSD = (value: String) => {
    switch (value) {
      case "dasudung":
        return <Status status="dasudung"></Status>;
      case "hethan":
        return <Status status="hethan"></Status>;
      case "chuasudung":
        return <Status status="chuasudung"></Status>;
      default:
        return <Status status="chuasudung"></Status>;
    }
  };

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {type === "quanlyve" ? (
              <>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell>Booking code</StyledTableCell>
                <StyledTableCell>Số vé</StyledTableCell>
                <StyledTableCell>Tên sự kiện</StyledTableCell>
                <StyledTableCell>Tình trạng sử dụng</StyledTableCell>
                <StyledTableCell>Ngày sử dụng</StyledTableCell>
                <StyledTableCell>Ngày xuất vé</StyledTableCell>
                <StyledTableCell>Cổng check - in</StyledTableCell>
              </>
            ) : type === "doisoatve" ? (
              <>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell>Số vé</StyledTableCell>
                <StyledTableCell>Tên sự kiện</StyledTableCell>
                <StyledTableCell>Ngày sử dụng</StyledTableCell>
                <StyledTableCell>Tên loại vé</StyledTableCell>
                <StyledTableCell>Cổng check - in</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
              </>
            ) : (
              <>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell>Mã gói</StyledTableCell>
                <StyledTableCell>Tên gói vé</StyledTableCell>
                <StyledTableCell>Ngày áp dụng</StyledTableCell>
                <StyledTableCell>Ngày hết hạn</StyledTableCell>
                <StyledTableCell>Giá vé (VNĐ/Vé)</StyledTableCell>
                <StyledTableCell>Giá Combo (VNĐ/Combo)</StyledTableCell>
                <StyledTableCell>Tình trạng</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row: any, id: number) => (
            <StyledTableRow key={id.toString()}>
              <StyledTableCell component="th" scope="row">
                {(id + 1).toString()}
              </StyledTableCell>
              {type === "quanlyve" ? (
                <>
                  <StyledTableCell>{row.bookingcode}</StyledTableCell>
                  <StyledTableCell>{row.sove}</StyledTableCell>
                  <StyledTableCell>{row.tensukien}</StyledTableCell>
                  <StyledTableCell>{renderTTSD(row.ttsd)}</StyledTableCell>
                  <StyledTableCell>{row.ngaysudung}</StyledTableCell>
                  <StyledTableCell>{row.ngayxuatve}</StyledTableCell>
                  <StyledTableCell>{row.cong}</StyledTableCell>
                </>
              ) : type === "doisoatve" ? (
                <>
                  <StyledTableCell>{row.bookingcode}</StyledTableCell>
                  <StyledTableCell>{row.sove}</StyledTableCell>
                  <StyledTableCell>{row.tensukien}</StyledTableCell>
                  <StyledTableCell>{renderTTSD(row.ttsd)}</StyledTableCell>
                  <StyledTableCell>{row.ngaysudung}</StyledTableCell>
                  <StyledTableCell>{row.ngayxuatve}</StyledTableCell>
                  <StyledTableCell>{row.cong}</StyledTableCell>
                </>
              ) : (
                <>
                  <StyledTableCell>{row.bookingcode}</StyledTableCell>
                  <StyledTableCell>{row.sove}</StyledTableCell>
                  <StyledTableCell>{row.tensukien}</StyledTableCell>
                  <StyledTableCell>{renderTTSD(row.ttsd)}</StyledTableCell>
                  <StyledTableCell>{row.ngaysudung}</StyledTableCell>
                  <StyledTableCell>{row.ngayxuatve}</StyledTableCell>
                  <StyledTableCell>{row.cong}</StyledTableCell>
                </>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
