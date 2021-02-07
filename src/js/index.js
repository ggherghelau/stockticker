import { getRandomStock } from './controllers/stock-controller.js';
import {getStocksRequest} from './fetch/get-requests.js';
import {setStocks, getStocks, updateStocks} from './models/stocks.js';

 window.addEventListener('load',(e) =>{
   const request = getStocksRequest("https://www.alphavantage.co/query?");
    
   request.then(data =>{
      //save data to imported file
      const val = Object.values(data)
      const info = val[1]
      setStocks(info);

      getRandomStock().forEach(item => 
        document.querySelector('.cat-display').append(item));

   })

   const result = getStocks();
   console.log(result)

   
    
 })