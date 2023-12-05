import {configureStore} from "@reduxjs/toolkit";
import balanceReducer from "./reducers/balanceReducer";
import quoteReducer from "./reducers/quoteReducer";
import {logger} from "redux-logger/src";

const initialState =
    {
        balance: 10000,
        quote: 'We will win!'
    };

const store = configureStore(
    {
        preloadedState: initialState,
        reducer:
            {
                balance: balanceReducer,
                quote: quoteReducer
            },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
    }
);

export default store;