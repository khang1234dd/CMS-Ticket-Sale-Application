import danhSachVeReducer from './danhSachVe'
import sukienReducer from './sukien'
import { combineReducers } from 'redux'
import goiVeReducer from './goiVe'
import timeReducer from './time'
import doanhthuReducer from './doanhthu'

const rootReducers = combineReducers({
    danhSachVe: danhSachVeReducer,
    goiVe: goiVeReducer,
    time: timeReducer,
    doanhthu:doanhthuReducer,
    sukien: sukienReducer
})

export default rootReducers