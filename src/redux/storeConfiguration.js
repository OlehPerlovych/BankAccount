import {rootReducer} from "./reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const initialState = {balance: 10000 , quote: 'We will win!'};
const store = createStore(rootReducer,initialState, applyMiddleware(thunk, logger));

export default store;