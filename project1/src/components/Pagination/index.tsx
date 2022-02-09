import React, { useState } from "react";
import "./style.scss";
import PaginationMUI from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { ReactComponent as NextIcon } from "../../assets/svg/next.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/prev.svg";

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

const Pagination = () => {
  const classes = useStyles();
  const totalCount = 20;
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleChangeNextPage = () =>{
      if(page < totalCount)
        setPage(page+1);
  }
  const handleChangePrevPage = () =>{
    if(page > 1)
      setPage(page-1);
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
        count={totalCount}
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
