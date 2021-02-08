
let stockValues = [];
let stockDates = [];
// let once; //no value - undefined

function setStockValues(values){
    stockValues = [];
    for (var i in values){
        stockValues.push(values[i])
    }
}
function setStockDates(dates){
    stockDates = [];
    stockDates = dates;
}

function getStockValues(){
    return stockValues;
}

function getStockDates(){
    return stockDates[0];
}




export {setStockValues, getStockValues, setStockDates, getStockDates};

 


  

 


 

