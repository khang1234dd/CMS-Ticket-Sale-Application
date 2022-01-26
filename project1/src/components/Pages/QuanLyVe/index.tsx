import React, {useState} from 'react';
import './style.scss'
import BoxMain from '../../common/BoxMain/index'
import BoxDate from '../../common/BoxDate';
import Search from '../../Search';
import ButtonOutLineMui from '../../common/ButtonOutLineMui';
import {ReactComponent as Filter} from '../../../assets/svg/filter.svg'
import Table from '../../Table';
import Pagination from '../../Pagination';
import LocVeModal from '../../LocVeModal';

const QuanLyVe = () => {
    const [open,setOpen] = useState<boolean>(false)
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
                <Table></Table>
            </div>
            <div className="tablePagination">
                <Pagination></Pagination>
            </div>
        </BoxMain>
        <LocVeModal open={open} handleClose={()=>setOpen(false)}></LocVeModal>
    </>
  );
};

export default QuanLyVe;
