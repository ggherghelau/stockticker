//all get requests

/*
@function: getStocksRequest
@params: url: api param url string
@description: send through a request to retrieve the required data from the api object 
*/
function getStocksRequest(url){
   
    //create custom query param to pass with URL
    //also add api key
    const queryParams = new URLSearchParams(url.search);
    queryParams.set('function', 'TIME_SERIES_DAILY'); //query param
    queryParams.set('symbol', 'IBM');
    queryParams.set('apikey', 'IDSM9WY7P551RX1V');  // api key
    queryParams.toString;
    console.log(url + queryParams);
    
    const result = fetch(url + queryParams)  
    .then(response => response.json()) //get response from API
    .then(data => data) // get data from response from API
    console.log(result);
    return result;
    
}

 

export {getStocksRequest}
 
 