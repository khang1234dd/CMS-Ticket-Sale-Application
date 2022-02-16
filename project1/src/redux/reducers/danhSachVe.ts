interface danhSachVeState{
    dataTable: {
        id: string,
        bookingcode: string,
        sove: number,
        tensukien: string,
        ttsd: string,
        ngaysudung: Date,
        ngayxuatve: Date,
        cong: string,
        loaive: string
    }[]
    dataTableDoiSoat: {
        bookingcode: string,
        sove: number,
        tensukien: string,
        ttsd: string,
        ngaysudung: Date,
        ngayxuatve: Date,
        cong: string,
        loaive: string
    }[]
    totalRows: number,
    totalRowsDoiSoat:number,
    limit:number,
    limitDoiSoat:number,
    page:number,
    pageDoiSoat:number,
    dataPagination: Array<object>,
    dataPaginationDoiSoat: Array<object>,
    ttsd:number,
    cong:Array<boolean>,
    reloadLocVe: boolean,
    reloadLocVeDoiSoat:boolean,
    tenSuKien: string | null, 
    ttds: number,
    searchDSV:string,
    dataSearchDSV: Array<any>
    searchDoiSoat:string,
    dataSearchDoiSoat: Array<any>
    showDoiSoat:boolean,
}

const initialState:danhSachVeState= {
    dataTable:[],
    dataTableDoiSoat:[],
    totalRows: 0,
    totalRowsDoiSoat: 0,
    limit: 5,
    limitDoiSoat: 6,
    page:1,
    pageDoiSoat:1,
    dataPagination: [],
    dataPaginationDoiSoat: [],
    ttsd:0,
    cong:[true,false,false, false, false,false],
    reloadLocVe: false,
    reloadLocVeDoiSoat: false, 
    tenSuKien: null,
    ttds:0,
    searchDSV: '',
    dataSearchDSV: [],
    searchDoiSoat: '',
    dataSearchDoiSoat: [],
    showDoiSoat:false,
}

const danhSachVeReducer = (state=initialState , action:any) => {
    switch(action.type){
        case 'GET_DATA_TABLE_DSV':{
            const newDataTable = action.payload.data;
            const totalRows = action.payload.totalRows;
            
            return { 
                ...state,
                dataTable: newDataTable,
                totalRows: totalRows
            }
        }
        case 'ADD_DATA_TABLE_DSV':{
            return { 
                ...state,
            }
        }
        case 'GET_DATA_TABLE_PAGINATION_DSV':{
            const newDataTable = action.payload.data;
            const page = action.payload.page
            return { 
                ...state,
                dataPagination: newDataTable,
                page: page
            }
        }
        case 'GET_DATA_TABLE_PAGINATION_DOISOAT':{
            const newDataTable = action.payload.data;
            const page = action.payload.page
            const showDoiSoat = action.payload.showChotDoiSoat
            return { 
                ...state,
                dataPaginationDoiSoat: newDataTable,
                pageDoiSoat: page,
                showDoiSoat: showDoiSoat

            }
        }
        case 'CHANGE_PAGE_DSV':{
            const page =+ action.payload 
            return { 
                ...state,
                page: page
            }
        }
        case 'CHANGE_PAGE_DOISOAT':{
            const page =+ action.payload 
            return { 
                ...state,
                pageDoiSoat: page
            }
        }
        case 'LOC_VE':{
            const ttsd = action.payload.ttsd
            const cong = action.payload.cong
            return { 
                ...state,
                ttsd: ttsd,
                cong:cong,
                reloadLocVe: !state.reloadLocVe
            }
        }
        case 'LOC_VE_DOISOAT':{
            const ttds = action.payload.ttds
            return { 
                ...state,
                ttds: ttds,
                reloadLocVeDoiSoat: !state.reloadLocVeDoiSoat
            }
        }
        case 'GET_DATA_TABLE_DOISOAT':{
            const newDataTable = action.payload.data;
            const totalRows = action.payload.totalRows;
            
            return { 
                ...state,
                dataTableDoiSoat: newDataTable,
                totalRowsDoiSoat: totalRows
            }
        }
        case 'UPDATE_DATA_SEARCH_DSV':{
            const newData = action.payload.data
            const newSearch = action.payload.search
            return { 
                ...state,
                searchDSV:newSearch,
                dataSearchDSV: newData
            }
        }
        case 'UPDATE_DATA_SEARCH_DOISOAT':{
            const newData = action.payload.data
            const newSearch = action.payload.search
            return { 
                ...state,
                searchDoiSoat:newSearch,
                dataSearchDoiSoat: newData
            }
        }
        case 'CHOT_DOI_SOAT':{
            return { 
                ...state,
                reloadLocVeDoiSoat: !state.reloadLocVeDoiSoat,
            }
        }
        
        default: {
            return state
        }
    }
    // return state
}

export default danhSachVeReducer