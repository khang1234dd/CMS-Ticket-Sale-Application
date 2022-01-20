import React from 'react';
import './style.scss'
import BoxMain from '../../common/BoxMain/index'
import Search from '../../Search';
import ButtonOutLine from '../../common/ButtonOutLine';


const index = () => {
  return (
    <BoxMain header="Đối soát vé">
        <div className="subHeaderStyle">
            <Search name="Tìm bằng số vé"></Search>
            <div className="subHeaderStyle-btStyle">
                <ButtonOutLine style={{backgroundColor: "#FF993C"}}>
                    <div style={{color: "#fff", fontSize:'1rem'}}>Chốt đối soát</div>
                </ButtonOutLine>
            </div>
        </div>
    </BoxMain>
  );
};

export default index;
