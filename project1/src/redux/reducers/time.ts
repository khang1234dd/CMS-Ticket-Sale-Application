interface timeState{
    dateSingle:Date,
    dateSingleSoVe:Date,
    dateRange:{
        firstDate: Date,
        lastDate: Date,
    }
    dateTuNgayDSV: Date,
    dateDenNgayDSV: Date,
    dateTuNgayDSVAction: Date,
    dateDenNgayDSVAction: Date,
    dateTuNgayDoiSoat: Date,
    dateDenNgayDoiSoat: Date,
    dateTuNgayDoiSoatAction: Date,
    dateDenNgayDoiSoatAction: Date,
    reload: boolean
}

const initialState:timeState= {
    dateSingle:new Date(),
    dateSingleSoVe: new Date(),
    dateRange:{
        firstDate: new Date(),
        lastDate: new Date(),
    },
    dateTuNgayDSV: new Date("2021/1/1"),
    dateDenNgayDSV: new Date("2023/1/1"),
    dateTuNgayDSVAction: new Date("2021/1/1"),
    dateDenNgayDSVAction: new Date("2023/1/1"),
    dateTuNgayDoiSoat: new Date("2021/1/1"),
    dateDenNgayDoiSoat: new Date("2023/1/1"),
    dateTuNgayDoiSoatAction: new Date("2021/1/1"),
    dateDenNgayDoiSoatAction: new Date("2023/1/1"),
    reload: false
    
}

const timeReducer = (state=initialState , action:any) => {
    switch(action.type){
        case 'ADD_TIME_RANGE_FIRST':{
            const date = state.dateRange.firstDate
            date.setSeconds(action.payload.second)
            date.setMinutes(action.payload.minute)
            date.setHours(action.payload.hour)
            return { 
                ...state,
                dateRange: {...state.dateRange,firstDate: date}
            }
        }
        case 'ADD_TIME_RANGE_LAST':{
            const date = state.dateRange.lastDate
            date.setSeconds(action.payload.second)
            date.setMinutes(action.payload.minute)
            date.setHours(action.payload.hour)
            return { 
                ...state,
                dateRange: {...state.dateRange,lastDate: date}
            }
        }
        case 'ADD_TIME_SINGLE':{
            const date = state.dateSingle
            date.setSeconds(action.payload.second)
            date.setMinutes(action.payload.minute)
            date.setHours(action.payload.hour)
            return { 
                ...state,
                dateSingle: date
            }
        }
        case 'ADD_DATE_RANGE_FIRST':{
            const date = state.dateRange.firstDate
            date.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            return { 
                ...state,
                dateRange: {...state.dateRange,firstDate: date}
            }
        }
        case 'ADD_DATE_RANGE_LAST':{
            const date = state.dateRange.lastDate
            date.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            return { 
                ...state,
                dateRange: {...state.dateRange,lastDate: date}
            }
        }
        case 'ADD_DATE_SINGLE':{
            const date = {...state}
            
            date.dateSingle.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        case 'ADD_DATE_SINGLE_SOVE':{
            const date = {...state}
            
            date.dateSingleSoVe.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        case 'ADD_DATE_TUNGAY_DSV':{
            const date = {...state}
            
            date.dateTuNgayDSV.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        case 'ADD_DATE_DENNGAY_DSV':{
            const date = {...state}
            date.dateDenNgayDSV.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        case 'ADD_DATE_DSV_ACTION':{
            const date = {...state}
            date.dateTuNgayDSVAction = state.dateTuNgayDSV
            date.dateDenNgayDSVAction = state.dateDenNgayDSV
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        case 'ADD_DATE_TUNGAY_DOISOAT':{
            const date = {...state}
            
            date.dateTuNgayDoiSoat.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        case 'ADD_DATE_DENNGAY_DOISOAT':{
            const date = {...state}
            date.dateDenNgayDoiSoat.setFullYear(action.payload.year,action.payload.month,action.payload.date)
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        case 'ADD_DATE_DOISOAT_ACTION':{
            const date = {...state}
            date.dateTuNgayDoiSoatAction = state.dateTuNgayDoiSoat
            date.dateDenNgayDoiSoatAction = state.dateDenNgayDoiSoat
            date.reload = !date.reload 
            return { 
                ...date
            }
        }
        default: {
            return state
        }
    }
    // return state
}

export default timeReducer