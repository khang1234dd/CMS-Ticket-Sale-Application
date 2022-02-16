import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";

type searchProps = {
  name: string;
  action: (payload: any)=>void 
  data:Array<any>;
  search: string,
  type: 'searchSoVe' | 'searchMaGoi' | 'searchNav'
};

const Search = ({ name,data,action,search,type }: searchProps) => {

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const arraySearch = data.filter((item:any) => {
      const valueSoVe = item.sove.toString();
      return valueSoVe.includes(e.target.value)
    })
    dispatch(action({data:arraySearch,search: e.target.value}))
  }

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const arraySearch = data.filter((item:any) => {
      const valueSoVe = item.ma.toString();
      return valueSoVe.includes(e.target.value)
    })
    dispatch(action({data:arraySearch,search: e.target.value}))
  }
  return (
    <div className="wrapMain">
      {type === "searchSoVe" ?<input type="text" className="inputStyle" placeholder={name} value={search} onChange={handleChange}></input>
      : type === "searchMaGoi" ? <input type="text" className="inputStyle" placeholder={name} value={search} onChange={handleChange1}></input>
      :<input type="text" className="inputStyle" placeholder={name}></input>
    }
      <SearchIcon sx={{ color: "#1E0D03" }} width={24} height={24} />
    </div>
  );
};

export default Search;
