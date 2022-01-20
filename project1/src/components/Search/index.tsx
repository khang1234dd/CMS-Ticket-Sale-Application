import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './style.scss'

type searchProps = {
    name: string
}

const index = ({name}:searchProps) => {
  return <div className="wrapMain">
        <input type="text" className="inputStyle" placeholder={name}></input>
        <SearchIcon sx={{color: '#1E0D03'}} width={24} height={24} />
      </div>;
};

export default index;
