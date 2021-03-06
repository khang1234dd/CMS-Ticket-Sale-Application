import React, { useState, useEffect } from "react";
import './style.scss'
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
import {formatDate, formatTime} from '../../utils/formatDate'
import {formatNumber} from '../../utils/formatNumber'
import {ReactComponent as CapNhatSVG} from '../../assets/svg/capnhat.svg'
import Button from "@mui/material/Button";


type TableProps = {
  dataTable: Array<any>;
  type: "quanlyve" | "doisoatve" | "caidat";
  handleClick?:(event:React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F1F4F8",
    color: "#1E0D03",
    fontWeight: "bold",
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableCellDoiSoat = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F1F4F8",
    color: "#1E0D03",
    fontWeight: "bold",
    fontSize: 11.5,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
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

const StyleButton = styled(Button)({
  color: '#FF993C',
  fontSize: '1rem',
  textTransform: 'none',
  '&:hover':{
      backgroundColor: '#FFEAD8'
  }
})


export default function CustomizedTables({ dataTable, type,handleClick }: TableProps) {
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

  const renderDoiSoat = (value: Boolean) => {
    switch (value) {
      case true:
        return <em className="Table-doisoat-dadoisoat">???? ?????i so??t</em>;
      case false:
        return  <em className="Table-doisoat-chuadoisoat">Ch??a ?????i so??t</em>;
      default:
        return  <em ></em>;
    }
  };

  const renderTinhTrang = (value: Boolean) => {
    switch (value) {
      case true:
        return <Status status="dangapdung" style={{width: "100%"}}></Status>;
      case false:
        return  <Status status="tat" style={{width:'50%'}}></Status>;
      default:
        return  <Status status="dangapdung" style={{width: "100%"}}></Status>;
    }
  };

  const renderTien = (value: number,sove:number,type: 'giave' | 'giacombo') => {
    if(value !== 0 && type==='giave'){
      return formatNumber(value)+ ' ' + "VN??"
    }
    else if(value !== 0 && type==='giacombo')
    {
      return formatNumber(value) + ' '  + `VN??/${sove} V??`
    }
    else {return <></>}
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
                <StyledTableCell>S??? v??</StyledTableCell>
                <StyledTableCell>T??n s??? ki???n</StyledTableCell>
                <StyledTableCell>T??nh tr???ng s??? d???ng</StyledTableCell>
                <StyledTableCell align="right">Ng??y s??? d???ng</StyledTableCell>
                <StyledTableCell align="right">Ng??y xu???t v??</StyledTableCell>
                <StyledTableCell>C???ng check - in</StyledTableCell>
              </>
            ) : type === "doisoatve" ? (
              <>
                <StyledTableCellDoiSoat >STT</StyledTableCellDoiSoat>
                <StyledTableCellDoiSoat >S??? v??</StyledTableCellDoiSoat>
                <StyledTableCellDoiSoat >T??n s??? ki???n</StyledTableCellDoiSoat>
                <StyledTableCellDoiSoat align="right">Ng??y s??? d???ng</StyledTableCellDoiSoat>
                <StyledTableCellDoiSoat >T??n lo???i v??</StyledTableCellDoiSoat>
                <StyledTableCellDoiSoat >C???ng check - in</StyledTableCellDoiSoat>
                <StyledTableCellDoiSoat>&nbsp;</StyledTableCellDoiSoat>
              </>
            ) : (
              <>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell>M?? g??i</StyledTableCell>
                <StyledTableCell>T??n g??i v??</StyledTableCell>
                <StyledTableCell align="right">Ng??y ??p d???ng</StyledTableCell>
                <StyledTableCell align="right">Ng??y h???t h???n</StyledTableCell>
                <StyledTableCell align="right">Gi?? v?? (VN??/V??)</StyledTableCell>
                <StyledTableCell>Gi?? Combo (VN??/Combo)</StyledTableCell>
                <StyledTableCell>T??nh tr???ng</StyledTableCell>
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
                  <StyledTableCell align="right">{formatDate(row.ngaysudung)}</StyledTableCell>
                  <StyledTableCell align="right">{formatDate(row.ngayxuatve)}</StyledTableCell>
                  <StyledTableCell>{row.cong}</StyledTableCell>
                </>
              ) : type === "doisoatve" ? (
                <>
                  <StyledTableCellDoiSoat >{row.sove}</StyledTableCellDoiSoat>
                  <StyledTableCellDoiSoat >{row.tensukien}</StyledTableCellDoiSoat>
                  <StyledTableCellDoiSoat align="right">{formatDate(row.ngaysudung)}</StyledTableCellDoiSoat>
                  <StyledTableCellDoiSoat >{row.loaive}</StyledTableCellDoiSoat>
                  <StyledTableCellDoiSoat >{row.cong}</StyledTableCellDoiSoat>
                  <StyledTableCellDoiSoat >{renderDoiSoat(row.doisoat)}</StyledTableCellDoiSoat>
                </>
              ) : (
                <>
                  <StyledTableCell>{row.ma}</StyledTableCell>
                  <StyledTableCell>{row.ten}</StyledTableCell>
                  <StyledTableCell align="right"><div>{formatDate(row.ngayapdung)}</div> <div>{formatTime(row.ngayapdung)}</div></StyledTableCell>
                  <StyledTableCell align="right"><div>{formatDate(row.ngayhethan)}</div> <div>{formatTime(row.ngayhethan)}</div></StyledTableCell>
                  <StyledTableCell align="right">{renderTien(row.giave,row.sove,'giave')}</StyledTableCell>
                  <StyledTableCell>{renderTien(row.giacombo,row.sove,'giacombo')}</StyledTableCell>
                  <StyledTableCell>{renderTinhTrang(row.tinhtrang)}</StyledTableCell>
                  <StyledTableCell><StyleButton startIcon={<CapNhatSVG/>} onClick={handleClick} value={row.id}>C???p nh???t</StyleButton> </StyledTableCell>
                </>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
