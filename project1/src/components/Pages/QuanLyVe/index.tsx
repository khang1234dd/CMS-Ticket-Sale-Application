import React, {useEffect, useState} from 'react';
import './style.scss'
import BoxMain from '../../common/BoxMain/index'
import BoxDate from '../../common/BoxDate';
import Search from '../../Search';
import ButtonOutLineMui from '../../common/ButtonOutLineMui';
import {ReactComponent as Filter} from '../../../assets/svg/filter.svg'
import Table from '../../Table';
import Pagination from '../../Pagination';
import LocVeModal from '../../LocVeModal';
import { useDispatch, useSelector } from 'react-redux';
import { getDataTableDSV } from '../../../redux/actions';
import { timeStamp } from 'console';

const QuanLyVe = () => {
    const [open,setOpen] = useState<boolean>(false)
    const dispatch = useDispatch();

    const dataTable = useSelector((state:any) => state.danhSachVe.dataTable)
    
  
    useEffect(() =>{
        // dispatch(addDataTableDSV(rows))
        // (setTimeout(() => dispatch(getDataTableDSV()),2000))
        dispatch(getDataTableDSV())
        console.log('dataTable - view =>',dataTable)
        // (async()=>{
        //      await dispatch(getDataTableDSV())
        //     console.log('dataTable - view =>',dataTable)
        // })()
    },[])
  return (
    <>
     
        <BoxMain header="Danh sách vé">
            <div className="subHeaderStyle">
                <Search name="Tìm bằng số vé"></Search>
                <div className="subHeaderStyle-btStyle">
                    <ButtonOutLineMui style={{marginRight: '0.75rem'}} onClick={()=>{setOpen(true)}}>
                        <Filter style={{marginRight: '0.75rem'}}></Filter>
                        <div>Lọc vé</div>
                    </ButtonOutLineMui >
                    <ButtonOutLineMui >
                        <div>Xuất file (.csv)</div>
                    </ButtonOutLineMui>
                </div>
            </div>
            <div className="tableMain"> 
                <Table dataTable={dataTable} type="quanlyve"></Table>
            </div>
            <Pagination></Pagination>
        </BoxMain>
        <LocVeModal open={open} handleClose={()=>setOpen(false)}></LocVeModal>
    </>
  );
};

export default QuanLyVe;
