import React, { useEffect } from 'react';
import './style.scss'
import BoxMain from '../../common/BoxMain/index'
import Search from '../../Search';
import ButtonOutLine from '../../common/ButtonOutLine';
import {ReactComponent as Filter} from '../../../assets/svg/filter.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getDataTableGoiVe } from '../../../redux/actions';
import Table from '../../Table';

const CaiDat = () => {
  const  dispatch = useDispatch()
  const dataTable =  useSelector((state:any)=> state.goiVe.dataTable)

  useEffect(() =>{

    dispatch(getDataTableGoiVe())
    console.log('dataTable - view =>',dataTable)

},[])
  return (
    <BoxMain header="Danh sách gói vé">
        <div className="subHeaderStyle">
            <Search name="Tìm bằng số vé"></Search>
            <div className="subHeaderStyle-btStyle">
                <ButtonOutLine style={{marginRight: '1rem'}}>
                    <div style={{ fontSize:'1rem'}}>Xuất file (.csv)</div>
                </ButtonOutLine>
                <ButtonOutLine style={{backgroundColor: "#FF993C"}}>
                    <div style={{color: "#fff", fontSize:'1rem'}}>Thêm gói vé</div>
                </ButtonOutLine>
            </div>
        </div>
        <div className="CaiDat-marginTop2">
            <Table dataTable={dataTable} type="caidat"></Table>
        </div>
    </BoxMain>
  );
};

export default CaiDat;
