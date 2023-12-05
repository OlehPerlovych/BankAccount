import {configureStore} from "@reduxjs/toolkit";
import account from './slice/accountSlice'

const store = configureStore(
    {
        reducer: {account}
    }
);

export default store;