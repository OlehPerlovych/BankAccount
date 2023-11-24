import {ERROR_QUOTE, PUT_QUOTE, QUOTE_REQUEST} from "../actions/quoteAction";

const initialQuote = 'we will win';

function quoteReducer(quote = initialQuote, action)
{
    switch (action.type)
    {
        case PUT_QUOTE:
        case QUOTE_REQUEST:
        case ERROR_QUOTE:
            return action.payload;
        default:
            return quote;
    }
}
export default quoteReducer;