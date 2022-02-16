import React, { useState } from "react";
import "./style.scss";
import PaginationMUI from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { ReactComponent as NextIcon } from "../../assets/svg/next.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/prev.svg";
import { useDispatch, useSelector } from "react-redux";

type PaginationProps = {
  action: (payload:Object) =>void
  totalRows: number,
  limit:number,
  page:number,
}

const useStyles = makeStyles({
  root: {
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: "#FF993C",
      border: "1px solid #FF993C",
      "&:hover": {
        backgroundColor: "#ffe3a1",
      },
    },
    "& .MuiPaginationItem-root": {
      "&:hover": {
        backgroundColor: "#ffe3a1",
      },
    },
  },
});

const Pagination = ({action,totalRows,limit,page}: PaginationProps) => {
  const classes = useStyles();
  const totalPage =  Math.ceil(totalRows / limit)


  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(action(value))
  };
  const handleChangeNextPage = () =>{
      if(page < totalRows)
        dispatch(action(1))
        // setPage(page+1);
  }
  const handleChangePrevPage = () =>{
    if(page > 1)
      dispatch(action(-1))
      // setPage(page-1);
}
  return (
    <div className="PaginationWrap">
      <button className="buttonPagination" style={page !== 1? {color: '#FF993C'} :{}} onClick={handleChangePrevPage}>
        <PrevIcon></PrevIcon>
      </button>
      <PaginationMUI
        page={page}
        onChange={handleChange}
        classes={{ root: classes.root }}
        count={totalPage}
        shape="rounded"
        hidePrevButton
        hideNextButton
      ></PaginationMUI>
      <button className="buttonPagination" style={page !== 20? {color: '#FF993C'} :{}} onClick={handleChangeNextPage}>
        <NextIcon></NextIcon>
      </button>
    </div>
  );
};

export default Pagination;
