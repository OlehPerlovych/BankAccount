import {createSlice} from "@reduxjs/toolkit";

const accountSlice = createSlice(
    {
        name: 'bank',
        initialState:
            {balance: 10000},
        reducers:
            {
                deposit(state, action) {
                    state.balance += action.payload;
                },
                withdraw(state, action) {
                    const res = state.balance -= action.payload;
                    state.balance = res < 0 ? state.balance : res;
                }
            }
    }
);

export const {deposit, withdraw} = accountSlice.actions;
export default accountSlice.reducer;