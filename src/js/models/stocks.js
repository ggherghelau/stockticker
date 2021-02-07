
let storeStocks = []
let once; //no value - undefined

function setStocks(data){
    if(once === undefined){
        for (var i in data){
            storeStocks.push(data[i])
          }
        once = true;
    }
}

function updateStocks(data){
    once = undefined;
    setStocks(data);
}

//using map, filter, reduce - not to mutate the origional data
function getStocks(){
    return storeStocks;
}

export {setStocks, getStocks, updateStocks};

 


  

 


 

