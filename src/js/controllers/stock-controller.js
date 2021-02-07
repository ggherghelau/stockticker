import {getStocks} from '../models/stocks.js';


function getRandomStock(){
    const data = getStocks();
    
    const stockMarkup = data.map(stock => {
        const view = `
                    <aside class="cat-view">
                    ${Object.keys(stock)[0]} =
                    ${Object.values(stock)[0]}
                    </aside>
                    `
        const elem = document.createRange().createContextualFragment(view).children[0];
        return elem;
    })
    return stockMarkup;
}





export {getRandomStock};