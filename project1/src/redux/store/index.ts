import { applyMiddleware ,createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import rootReducers from "../reducers";


const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk)),
)

export type RootState = ReturnType<typeof rootReducers>;


export default store