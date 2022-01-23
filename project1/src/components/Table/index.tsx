import * as React from "react";
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
import { borderRadius } from "@mui/system";

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

function createData(
  stt: number,
  bookingcode: string,
  sove: number,
  tensukien: string,
  ttsd: any,
  ngaysudung: string,
  ngayxuatve: string,
  cong: string
) {
  return {
    stt,
    bookingcode,
    sove,
    tensukien,
    ttsd,
    ngaysudung,
    ngayxuatve,
    cong,
  };
}

const rows = [
  createData(
    1,
    "ALT20210501",
    123456789034,
    "Hội chợ triển lãm tiêu dùng 2021",
    <Status status="dasudung" />,
    "14/4/2021",
    "14/4/2021",
    "Cổng 1"
  ),
  createData(
    2,
    "ALT20210501",
    123456789034,
    "Hội chợ triển lãm tiêu dùng 2021",
    <Status status="chuasudung" />,
    "14/4/2021",
    "14/4/2021",
    "Cổng 1"
  ),
  createData(
    3,
    "ALT20210501",
    123456789034,
    "Hội chợ triển lãm tiêu dùng 2021",
    <Status status="hethan" />,
    "14/4/2021",
    "14/4/2021",
    "Cổng 1"
  ),
  createData(
    4,
    "ALT20210501",
    123456789034,
    "Hội chợ triển lãm tiêu dùng 2021",
    <Status status="hethan" />,
    "14/4/2021",
    "14/4/2021",
    "Cổng 1"
  ),
  createData(
    5,
    "ALT20210501",
    123456789034,
    "Hội chợ triển lãm tiêu dùng 2021",
    <Status status="dasudung" />,
    "14/4/2021",
    "14/4/2021",
    "Cổng 1"
  ),
  //   createData(5,'ALT20210501',123456789034,'Hội chợ triển lãm tiêu dùng 2021',<Status status="dasudung" />, '14/4/2021', '14/4/2021', 'Cổng 1'),
  //   createData(6,'ALT20210501',123456789034,'Hội chợ triển lãm tiêu dùng 2021',<Status status="dasudung" />, '14/4/2021', '14/4/2021', 'Cổng 1'),
];

export default function CustomizedTables() {
  const classes = tableStyle();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell>Booking code</StyledTableCell>
            <StyledTableCell>Số vé</StyledTableCell>
            <StyledTableCell>Tên sự kiện</StyledTableCell>
            <StyledTableCell>Tình trạng sử dụng</StyledTableCell>
            <StyledTableCell>Ngày sử dụng</StyledTableCell>
            <StyledTableCell>Ngày xuất vé</StyledTableCell>
            <StyledTableCell>Cổng check - in</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.stt.toString()}>
              <StyledTableCell component="th" scope="row">
                {row.stt}
              </StyledTableCell>
              <StyledTableCell>{row.bookingcode}</StyledTableCell>
              <StyledTableCell>{row.sove}</StyledTableCell>
              <StyledTableCell>{row.tensukien}</StyledTableCell>
              <StyledTableCell>{row.ttsd}</StyledTableCell>
              <StyledTableCell>{row.ngaysudung}</StyledTableCell>
              <StyledTableCell>{row.ngayxuatve}</StyledTableCell>
              <StyledTableCell>{row.cong}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
