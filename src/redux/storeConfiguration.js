import {configureStore} from "@reduxjs/toolkit";
import account from './slice/accountSlice';
import quote from './slice/quoteSlice';

const store = configureStore(
    {
        reducer: {account,quote}
    }
);

export default store;