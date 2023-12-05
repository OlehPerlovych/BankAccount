import {errorQuoteAction, putQuoteAction, quoteRequestAction} from "../actions/quoteAction";

const initialQuote = 'we will win';

function quoteReducer(quote = initialQuote, action) {
    switch (action.type) {
        case putQuoteAction.type:
        case quoteRequestAction.type:
        case errorQuoteAction.type:
            return action.payload;
        default:
            return quote;
    }
}

export default quoteReducer;