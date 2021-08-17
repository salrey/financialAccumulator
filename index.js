const bitcoinTrades = require("./data/bitcoinTrades.json");
const ethereumTrades = require("./data/ethereumTrades.json");
const currencies = require("./data/currencies.json");

// Use the bitcoinTrades, ethereumTrades, and currencies variables above to solve these.
// Round to two decimal places.

// Issue: toFixed returns a string, so we have to convert it back to a number.
// This is a helper function that rounds to two decimal places and converts that string back to a number.
function roundNum(num) {

    return Number(Number(num).toFixed(2))
}

// console.log(roundNum(3.1415));
// >> 3.14
// console.log(roundNum(3.145));
// >> 3.15
// console.log(typeof roundNum(3.1415))
// >> 'number'

// Find the total price of all trades.
function findTotalPrice(trades) {
    // Default Value and output
    let totalPrice = 0
    for (let trade of trades) {
        totalPrice += Number(trade.price)
    }

    return roundNum(totalPrice)
}

// console.log(findTotalPrice(bitcoinTrades));
// >> 41815183.19

// Find the highest price of all trades.
function findHighestPrice(trades) {
    // Default Value and output
    let highestPrice = 0
    let current = trades[0]
    for (let i = 1; i < trades.length; i++) {
        trade = trades[i] 
        trade.price > current.price ? current = trade : current;
        highestPrice = roundNum(current.price)
    }

    return highestPrice
}

// console.log(findHighestPrice(bitcoinTrades));
// >> 41850.03 

// Find the average price of all trades.
function findAveragePrice(trades) {
    // Default Value and output
    let averagePrice = 0
    let sumTotal = 0
    const total = trades.length 

    for (let trade of trades) {
        sumTotal += Number(trade.price)
    }

    return averagePrice = roundNum(sumTotal/total)
}

// console.log(findAveragePrice(bitcoinTrades));
// >> 41815.18

// Find the lowest price of all trades.
function findLowestPrice(trades) {
    // Default Value and output
    let lowestPrice = 0
    let current = trades[0]
    for (let i = 1; i < trades.length; i++) {
        trade = trades[i] 
        trade.price < current.price ? current = trade : current;
        lowestPrice = roundNum(current.price)
    }

    return lowestPrice
}

// console.log(findLowestPrice(bitcoinTrades));
// >> 41781.9

// Find the total size of all trades.
function findTotalSize(trades) {
    // Default Value and output
    let totalSize = 0
    for (let trade of trades) {
        totalSize += Number(trade.size)
    }

    return roundNum(totalSize)
}

// console.log(findTotalSize(bitcoinTrades));
// >> 106.58

// Find the highest size of all trades.
function findHighestSize(trades) {
    // Default Value and output
    let highestSize = 0
    let current = trades[0]
    for (let i = 1; i < trades.length; i++) {
        trade = trades[i] 
        trade.size > current.size ? current = trade : current;
        highestSize = roundNum(current.size)
    }

    return highestSize
}

// console.log(findHighestSize(bitcoinTrades));
// >> 2.34

// Find the average size of all trades.
function findAverageSize(trades) {
    // Default Value and output
    let averageSize = 0
    let sumTotal = 0
    const total = trades.length 

    for (let trade of trades) {
        sumTotal += Number(trade.size)
    }

    return averageSize = roundNum(sumTotal/total)
}

// console.log(findAverageSize(bitcoinTrades));
// >> 0.11

// Find the lowest size of all trades.
function findLowestSize(trades) {
    // Default Value and output
    let lowestSize = 0
    let current = trades[0]
    for (let i = 1; i < trades.length; i++) {
        trade = trades[i] 
        trade.size < current.size ? current = trade : current;
        lowestSize = roundNum(current.size)
    }

    return lowestSize
}

// console.log(findLowestSize(bitcoinTrades));
// >> 0

// Filter the trades by trade type i.e. buy/sell. If type is not provided do not filter. If type is an invalid input return an empty array.
function getTradeType(trades, type) {
    // Default value and output
    let filteredResults = []
    let types = [trades[0].side, trades[1].side]
    if (types.includes(type)) {
        filteredResults = trades.filter(trade => trade.side === type) 
        return filteredResults
    } else if (type === undefined) {
        return trades
    } else {
        return filteredResults
    }

}

// console.log(getTradeType(bitcoinTrades, 'buy'));
// >> [
//      {
//        "time": "2021-08-06T15:50:36.4683Z",
//        "trade_id": 199703070,
//        "price": "41844.06000000",
//        "size": "0.00228569",
//        "side": "buy"
//      },
//      {
//        "time": "2021-08-06T15:50:34.130059Z",
//        "trade_id": 199703067,
//        "price": "41832.44000000",
//        "size": "0.00101132",
//        "side": "buy"
//      },
//        "time": "2021-08-06T15:50:33.547084Z",
//        "trade_id": 199703045,
//        "price": "41831.01000000",
//        "size": "0.03739041",
//        "side": "buy"
//      },
//      ...
// ]

// Get all the info (total price, average size, etc.) of all trades.
function getFullInfo(trades) {
    //Default value and output 
    let fullInfo = {}
    fullInfo.totalPrice = findTotalPrice(trades)
    fullInfo.totalSize = findTotalSize(trades)
    fullInfo.averagePrice = findAveragePrice(trades)
    fullInfo.averageSize = findAverageSize(trades)
    fullInfo.highestPrice = findHighestPrice(trades)
    fullInfo.lowestPrice = findLowestPrice(trades)
    fullInfo.highestSize = findHighestSize(trades)
    fullInfo.lowestSize = findLowestSize(trades)

    return fullInfo
}

// console.log(getFullInfo(bitcoinTrades));
// >> {
//     totalPrice: 41815183.19,
//     totalSize: 106.58,
//     averagePrice: 41815.18,
//     averageSize: 0.11,
//     highestPrice: 41850.03,
//     lowestPrice: 41781.9,
//     highestSize: 2.34,
//     lowestSize: 0
// }

// Return an object that contains the currency type as the key and an array of names/types strings as the value. See return example below for formatting.
function categorizeCurrencies(currencies) {
    // Default value and output 
    let currencyByCategory = {}
    
    for (let currency of currencies) {
        currencyByCategory[currency.details.type] = currencyByCategory[currency.details.type] || []
        currencyByCategory[currency.details.type].push(`${currency.name}(${currency.id})`)
    }

    return currencyByCategory
}

// console.log(categorizeCurrencies(currencies));
// {
//     crypto: [
//       'Dash(DASH)',
//       'Orchid(OXT)',
//       'Cosmos(ATOM)',
//       ...
//     ],
//     fiat: [
//       'British Pound(GBP)',
//       'United States Dollar(USD)',
//       ...
//     ]
// }

////////////////
////////////////
module.exports = {
    roundNum,
}