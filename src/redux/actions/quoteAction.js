import {errorQuote, putQuote, quoteRequest} from "../slice/accountSlice";

export const getQuoteAction = () => {
    return dispatch => {
        dispatch(quoteRequest('Loading...'));
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.quote)))
            .catch(error => dispatch(errorQuote('Error 404' + error.message)))
    }
}