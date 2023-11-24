export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuoteAction = quote =>
    ({
        type: PUT_QUOTE,
        payload: quote
    });