export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuoteAction = quote =>
    ({
        type: PUT_QUOTE,
        payload: quote
    });
export const getQuoteAction = () =>
{
    return dispatch =>
    {
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => dispatch(putQuoteAction(data.quote)))
            .catch(e => console.log(e))
    }
}