import { getStockVal, getStockDate } from './controllers/stock-controller.js';
import {getStocksRequest} from './fetch/get-requests.js';
import {setStockDates, setStockValues} from './models/stocks.js';


 document.querySelector('.search-api').addEventListener('submit',(e) =>{
   e.preventDefault();
   document.querySelector('.results').innerHTML = "";
   const func = e.target.elements.series.value;
   const symbol = e.target.elements.searchSymbol.value;
   const request = getStocksRequest("https://www.alphavantage.co/query?", func, symbol);
   let dates = [];
   request.then(data =>{
      //save data to imported file
      const val = Object.values(data)
      const info = val[1]
      setStockValues(info);

      dates.push(Object.keys(info))
      setStockDates(dates);

      // const count = getStockDate.length;
      // const x = getStockDate();
      // const y = getStockVal();
      // for (let i = 0; i<count; i++){
      //   document.querySelector('.results').append(x[i]);
      //   document.querySelector('.results').append(y[i]);
      // }

      getStockVal().forEach(item => 
        document.querySelector('.results').append(item));
   }) 
   
 })