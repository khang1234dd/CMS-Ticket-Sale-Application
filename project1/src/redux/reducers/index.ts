import danhSachVeReducer from './danhSachVe'
import isTest from './test'
import { combineReducers } from 'redux'
import goiVeReducer from './goiVe'

const rootReducers = combineReducers({
    danhSachVe: danhSachVeReducer,
    goiVe: goiVeReducer,
    test: isTest,
})

export default rootReducers