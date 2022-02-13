interface timeState{
    date:Date
}

const initialState:timeState= {
    date:new Date()
}

const timeReducer = (state=initialState , action:any) => {
    switch(action.type){
        case 'Add_Time':{
            const date = state.date
            date.setSeconds(action.payload.second)
            date.setMinutes(action.payload.minute)
            date.setHours(action.payload.hour)
            return { 
                ...state,
                date: date
            }
        }
        // case 'ADD_DATA_TABLE_GOIVE':{
        //     return { 
        //         ...state,
        //     }
        // }
        default: {
            return state
        }
    }
    // return state
}

export default timeReducer