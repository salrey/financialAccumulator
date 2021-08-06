const bitcoinTrades = require('./data/bitcoinTrades.json');
const etheriumTrades = require('./data/etheriumTrades.json');
const currencies = require('./data/currencies.json');

// Use the bitcoinTrades and etheriumTrades variables above to solve these
// Round to two decimal places

// Issue: ToFixed returns a string, so we have to convert it back to a number
// This is a helper function that rounds and converts to a number
function roundNum(num){
    return Number(num.toFixed(2));
}

// Find the totalPrice
function findTotalPrice(trades){

}
// Find the highestPrice
function findHighestPrice(trades){

}
// Find the averagePrice
function findAveragePrice(trades){

}
// Find the lowestPrice
function findLowestPrice(trades){

}

// Find the totalSize
function findTotalSize(trades){

}
// Find the highestSize
function findHighestSize(trades){

}
// Find the averageSize
function findAverageSize(trades){

}
// Find the lowestSize
function findLowestSize(trades){

}

function findPriceDetails(trades, tradeType){

    // Filter out the trades by trade type i.e. buy/sell, if tradeType is not provided do not filter, if tradeType is an invalid input return an empty array

    return {
        totalPrice: findTotalPrice(),
        totalSize: findTotalSize(),
        averagePrice: findAveragePrice(),
        averageSize: findAverageSize(),
        highestPrice: findHighestPrice(),
        lowestPrice: findLowestPrice(),
        highestSize: findHighestSize(),
        lowestSize: findLowestSize()
    }
}
// console.log(findPriceDetails(bitcoinTrades));

// >> {
//     totalPrice: xxx.19,
//     totalSize: xxx.58,
//     averagePrice: xxx.18,
//     averageSize: xxx.11,
//     highestPrice: xxx.03,
//     lowestPrice: xxx.9,
//     highestSize: xxx.34,
//     lowestSize: xxx
// }

// ---- Find the same data for Etherium ----


// Use the currencies data variable above to solve these

// Return an object that contains the currency type as the key and an array of names/types strings as the value. See return type below for formatting
function findCurrencyTypeCounts(currencies){

}
// console.log(findCurrencyTypeCounts(currencies));
// {
//     crypto: [
//       'Dash(DASH)',
//       'Orchid(OXT)',
//       'Cosmos(ATOM)',
//     ...
//     ],
//     fiat: [ 'British Pound(GBP)', 'United States Dollar(USD)' ]
// }