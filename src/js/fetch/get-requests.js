//all get requests

/*
@function: getStocksRequest
@params: url: api param url string
@description: send through a request to retrieve the required data from the api object 
*/

function getStocksRequest(url, func, symbol){

    const params = new URLSearchParams(url.search);
    params.set('function', func); //query param
    params.set('symbol', symbol);
    params.set('apikey', 'IDSM9WY7P551RX1V');  // api key
    params.toString;

    const result = fetch(url + params)
    .then(response => response.json()) //get response from API
    .then(data => data) // get data from response from API
    return result;
}

 

export {getStocksRequest}
 
 