interface goiVeState{
    dataTable: {
        ma: string,
        ten: string,
        giave: number,
        giacombo: number,
        ngayapdung: Date,
        ngayhethan: Date,
        tinhtrang:boolean,
    }[]
}

const initialState:goiVeState= {
    dataTable:[]
}

const goiVeReducer = (state=initialState , action:any) => {
    switch(action.type){
        case 'GET_DATA_TABLE_GOIVE':{
            const newDataTable = action.payload;
            
            return { 
                ...state,
                dataTable: newDataTable
            }
        }
        case 'ADD_DATA_TABLE_GOIVE':{
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

export default goiVeReducer