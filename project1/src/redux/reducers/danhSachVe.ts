interface danhSachVeState{
    dataTable: {
        bookingcode: string,
        sove: number,
        tensukien: string,
        ttsd: string,
        ngaysudung: string,
        ngayxuatve: string,
        cong: string,

    }[]
}

const initialState:danhSachVeState= {
    dataTable:[]
}

const danhSachVeReducer = (state=initialState , action:any) => {
    switch(action.type){
        case 'GET_DATA_TABLE_DSV':{
            const newDataTable = action.payload;
            
            return { 
                ...state,
                dataTable: newDataTable
            }
        }
        case 'ADD_DATA_TABLE_DSV':{
            return { 
                ...state,
            }
        }
        default: {
            return state
        }
    }
    // return state
}

export default danhSachVeReducer