import balanceReducer from "./balanceReducer";
import quoteReducer from "./quoteReducer";

export const rootReducer = (state, action) =>{
    return {
        balance : balanceReducer(state.balance, action),
        quote: quoteReducer(state.quote, action)
    }
}