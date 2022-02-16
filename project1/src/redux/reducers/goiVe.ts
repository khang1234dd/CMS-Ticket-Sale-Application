interface goiVeState{
    dataTable: {
        id:string,
        ma: string,
        ten: string,
        giave: number,
        giacombo: number,
        ngayapdung: Date,
        ngayhethan: Date,
        tinhtrang:boolean,
        sove:number
    }[]
    selectTinhTrang:string,
    reload: boolean,
    dataSearchCaiDat:Array<any>
    searchCaiDat:string
}

const initialState:goiVeState= {
    dataTable:[],
    selectTinhTrang:'',
    reload: false,
    dataSearchCaiDat:[],
    searchCaiDat:'',
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
                reload: !state.reload,
                selectTinhTrang: ''
            }
        }
        case 'UPDATE_DATA_TABLE_GOIVE':{
            return { 
                ...state,
                reload: !state.reload,
                selectTinhTrang: ''
            }
        }
        case 'CHANGE_SELECT_TINHTRANG':{
            
            return { 
                ...state,
                selectTinhTrang: action.payload
            }
        }
        case 'UPDATE_DATA_SEARCH_CAIDAT':{
            const newData = action.payload.data
            const newSearch = action.payload.search
            return { 
                ...state,
                searchCaiDat:newSearch,
                dataSearchCaiDat: newData
            }
        }
        
        
        default: {
            return state
        }
    }
    // return state
}

export default goiVeReducer