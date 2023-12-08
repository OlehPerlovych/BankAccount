import {createAsyncThunk} from "@reduxjs/toolkit";

export const getQuoteAction = createAsyncThunk('quote/fetchQuote', () => {
    return fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => data.quote)
})
