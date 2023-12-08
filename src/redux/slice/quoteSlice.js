import {createSlice} from "@reduxjs/toolkit";
import {getQuoteAction} from "../actions/quoteAction";

const quoteSlice = createSlice(
    {
        name: 'quote',
        initialState: {text: 'We will win!'},
        extraReducers: builder => {
            builder
                .addCase(getQuoteAction.pending, state => {
                    state.text = 'Loading...'
                })
                .addCase(getQuoteAction.rejected, state => {
                    state.text = 'Error 404'
                }).addCase(getQuoteAction.fulfilled, (state, action) => {
                state.text = action.payload
            })
        }
    }
)

export default quoteSlice.reducer;