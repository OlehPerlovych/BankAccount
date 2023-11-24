import accountReducer from "./accountReducer";
import {applyMiddleware, createStore} from "redux";
import {loggerEnhancer} from "./enhancers/loggerEnhancer";
import {thunkEnhancer} from "./enhancers/thunkEnhancer";

const initialState = {balance: 10000 , quote: 'We will win!'};
const store = createStore(accountReducer,initialState, applyMiddleware(thunkEnhancer, loggerEnhancer));

export default store;