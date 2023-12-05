import {createSlice} from "@reduxjs/toolkit";

const accountSlice = createSlice(
    {
        name: 'bank',
        initialState:
            {
                balance: 10000,
                quote: 'We will win!'
            },
        reducers:
            {
                deposit(state, action) {
                    state.balance += action.payload;
                },
                withdraw(state, action) {
                    const res = state.balance += action.payload;
                    state.balance = res < 0 ? state.balance : res;
                },
                putQuote(state, action) {
                    state.quote = action.payload;
                },
                errorQuote(state, action) {
                    state.quote = action.payload;
                },
                quoteRequest(state, action) {
                    state.quote = action.payload;
                }
            }
    }
);

export const {deposit, withdraw , putQuote,errorQuote,quoteRequest } = accountSlice.actions;
export default accountSlice.reducer;