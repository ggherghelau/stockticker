import {getStocksRequest} from './fetch/get-requests.js';
import {setStocks, getStocks} from './models/stocks.js';

 window.addEventListener('load',(e) =>{
   const request = getStocksRequest("https://www.alphavantage.co/query?");
    
   request.then(data =>{
      //save data to imported file
      setStocks(data);
      

   })


    
 })