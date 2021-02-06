// storing the cat data 
let stockStorage = [];
let once; //no value - undefined

function setStocks(data){
    if(once === undefined){
        stockStorage = [...data];
        once = true;
    }
}

function updateStocks(data){
    once = undefined;
    setStocks(data);
}

//using map, filter, reduce - not to mutate the origional data
function getStocks(){
    return stockStorage;
}

export {setStocks, getStocks, updateStocks};

 


  

 


 

