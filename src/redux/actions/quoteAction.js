import {createAction} from "@reduxjs/toolkit";

export const errorQuoteAction = createAction('ERROR_QUOTE');
export const quoteRequestAction = createAction('QUOTE_REQUEST');
export const putQuoteAction = createAction('PUT_QUOTE');
export const getQuoteAction = () => {
    return dispatch => {
        dispatch(quoteRequestAction('Loading...'));
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => dispatch(putQuoteAction(data.quote)))
            .catch(error => dispatch(errorQuoteAction('Error 404' + error.message)))
    }
}