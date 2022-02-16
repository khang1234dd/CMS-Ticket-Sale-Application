interface sukienState{
    dataSuKien: {
        ten: string
    }[]
    selectLocVe: string,
    selectLocVeAction: string,
}

const initialState:sukienState= {
    dataSuKien:[],
    selectLocVe:'',
    selectLocVeAction: '',
}

const sukienReducer = (state=initialState , action:any) => {
    switch(action.type){
        case 'GET_DATA_SUKIEN':{
            const newData = action.payload
            
            return { 
                ...state,
                dataSuKien: newData
                
            }
        }

        case 'CHANGE_SELECT_LOCVE':{
            const newSelectLocVe = action.payload
            
            return { 
                ...state,
                selectLocVe: newSelectLocVe
                
            }
        }
        case 'CHANGE_SELECT_LOCVE_ACTION':{
            const newSelectLocVe = state.selectLocVe
            
            return { 
                ...state,
                selectLocVeAction: newSelectLocVe
                
            }
        }
        
        default: {
            return state
        }
    }
    // return state
}

export default sukienReducer