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
import { addDataTableDSV, changePageDSV, getDataTableDSV, getDataTablePaginationDSV, updateDataSearchDSV } from '../../../redux/actions';
import { randomNumber } from '../../../utils/queryData';
import { Timestamp } from 'firebase/firestore';



const data = [
    {
        bookingcode: "ALT11111111",
        cong: "Cổng 2",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
    {
        bookingcode: "ALT22222222",
        cong: "Cổng 3",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
    {
        bookingcode: "ALT33333333",
        cong: "Cổng 4",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "dasudung"
    },
    {
        bookingcode: "ALT44444444",
        cong: "Cổng 5",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "dasudung"
    },
    {
        bookingcode: "ALT55555555",
        cong: "Cổng 5",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
    {
        bookingcode: "ALT66666666",
        cong: "Cổng 3",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
    {
        bookingcode: "ALT77777777",
        cong: "Cổng 4",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
    {
        bookingcode: "ALT88888888",
        cong: "Cổng 3",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "dasudung"
    },
    {
        bookingcode: "ALT99999999",
        cong: "Cổng 2",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "dasudung"
    },
    {
        bookingcode: "ALT10101010",
        cong: "Cổng 1",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
    {
        bookingcode: "ALT10111011",
        cong: "Cổng 5",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
    {
        bookingcode: "ALT12121212",
        cong: "Cổng 4",
        doisoat: false,
        loaive: "Vé cổng",
        ngaysudung: Timestamp.fromDate(new Date("2021-1-1")),
        ngayxuatve: Timestamp.fromDate(new Date("2023-1-1")),
        sove: randomNumber(100000000000,999999999999),
        tensukien: '',
        ttsd: "chuasudung"
    },
]

const QuanLyVe = () => {
    const [open,setOpen] = useState<boolean>(false)
    const dispatch = useDispatch();

    const dataTable = useSelector((state:any) => state.danhSachVe.dataTable)
    const dataPagination = useSelector((state:any) => state.danhSachVe.dataPagination)
    const dataSearchDSV = useSelector((state:any) => state.danhSachVe.dataSearchDSV)
    const limit = useSelector((state:any) => state.danhSachVe.limit)
    const page = useSelector((state:any) => state.danhSachVe.page)
    const totalRows = useSelector((state:any)=> state.danhSachVe.totalRows)
    const reload = useSelector((state:any) => state.danhSachVe.reloadLocVe)

    const tungay = useSelector((state:any) => state.time.dateTuNgayDSVAction)
    const denngay = useSelector((state:any) => state.time.dateDenNgayDSVAction)
    const ttsd = useSelector((state:any) => state.danhSachVe.ttsd)
    const cong = useSelector((state:any) => state.danhSachVe.cong)

    const search = useSelector((state:any) => state.danhSachVe.searchDSV)

  
    useEffect(() =>{
        dispatch(getDataTableDSV(ttsd,tungay,denngay,cong))
        // dispatch(addDataTableDSV(data))
    },[reload, tungay, denngay])

    useEffect(() =>{
        dispatch(getDataTablePaginationDSV(dataTable,page,limit))
    },[dataTable, limit, page])

    // useEffect(() =>{
        
    // },[search])
  return (
    <>
     
        <BoxMain header="Danh sách vé">
            <div className="subHeaderStyle">
                <Search data={dataTable}  action={updateDataSearchDSV} search={search} type="searchSoVe" name="Tìm bằng số vé"></Search>
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
                {search === "" ? <Table  dataTable={dataPagination} type="quanlyve"></Table> :<Table  dataTable={dataSearchDSV} type="quanlyve"></Table>}
            </div>
            {search===''?<Pagination totalRows={totalRows} page={page} limit={limit} action={changePageDSV}></Pagination>:<></>}
        </BoxMain>
        <LocVeModal open={open} handleClose={()=>setOpen(false)}></LocVeModal>
    </>
  );
};

export default QuanLyVe;
