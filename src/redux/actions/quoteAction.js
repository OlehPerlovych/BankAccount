export const PUT_QUOTE = 'PUT_QUOTE';
export const ERROR_QUOTE = 'ERROR_QUOTE';
export const QUOTE_REQUEST = 'QUOTE_REQUEST';

export const errorQuoteAction = error =>
    ({
        type: ERROR_QUOTE,
        payload: 'Oooooops! 404 error.' + error.message
    });
export const quoteRequestAction = () =>
    ({
        type: QUOTE_REQUEST,
        payload: 'Loading...'
    });

export const putQuoteAction = quote =>
    ({
        type: PUT_QUOTE,
        payload: quote
    });
export const getQuoteAction = () => {
    return dispatch => {
        dispatch(quoteRequestAction());
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => dispatch(putQuoteAction(data.quote)))
            .catch(error => dispatch(errorQuoteAction(error)))
    }
}