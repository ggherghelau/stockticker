import {getStockValues, getStockDates} from '../models/stocks.js';

function getStockDate(){
    const dates = getStockDates();
    const stockDateMarkup = dates.slice(0, 10).map(date => {
        const view = `
                    <aside class="stoc-values">
                        <h3>Date: ${date}</h3>                   
                    </aside>
                    `
        const elem = document.createRange().createContextualFragment(view).children[0];
        
        return elem;
    })
    return stockDateMarkup;
    
    
}

function getStockVal(){
    const data = getStockValues();
    const stockMarkup = data.slice(0, 10).map(stock => {
        const view = `
                    <aside class="stoc-values">
                        <p>open: ${Object.values(stock)[0]}</p>
                        <p>high: ${Object.values(stock)[1]}</p>
                        <p>low: ${Object.values(stock)[2]}</p>
                        <p>close: ${Object.values(stock)[3]}</p>                    
                    </aside>
                    `
        const elem = document.createRange().createContextualFragment(view).children[0];
        return elem;
    })
    // console.log(stockMarkup)
    return stockMarkup;
    
}





export {getStockVal, getStockDate};