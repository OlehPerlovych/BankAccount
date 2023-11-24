import accountReducer from "./accountReducer";
import {createStore} from "redux";

const initialState = {balance: 10000 , quote: 'We will win!'};
const store = createStore(accountReducer,initialState);

export default store;