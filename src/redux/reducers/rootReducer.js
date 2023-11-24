import balanceReducer from "./balanceReducer";
import quoteReducer from "./quoteReducer";
import {combineReducers} from "redux";

// export const rootReducer = (state, action) =>{
//     return {
//         balance : balanceReducer(state.balance, action),
//         quote: quoteReducer(state.quote, action)
//     }
// }

export const rootReducer = combineReducers(
    {
        balance : balanceReducer,
        quote : quoteReducer
    }
)