import danhSachVeReducer from './danhSachVe'
import isTest from './test'
import { combineReducers } from 'redux'
import goiVeReducer from './goiVe'
import timeReducer from './time'

const rootReducers = combineReducers({
    danhSachVe: danhSachVeReducer,
    goiVe: goiVeReducer,
    time: timeReducer,
})

export default rootReducers