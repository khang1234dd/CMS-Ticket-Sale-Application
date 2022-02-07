import { getFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import { getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk)),
)

export default store