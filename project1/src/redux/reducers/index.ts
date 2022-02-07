import danhSachVeReducer from './danhSachVe'
import isTest from './test'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    danhSachVe: danhSachVeReducer,
    test: isTest,
})

export default rootReducers