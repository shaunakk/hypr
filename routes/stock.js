var express = require('express');
var router = express.Router();
var request = require('request')
var numeral = require('numeral');
const csv = require('csvtojson')
var temp = []
var stockData = []
var stockDataDuring = []
fs = require('fs')
var removeByAttr = function(arr, attr, value) {
  var i = arr.length;

  while (i--) {
    if ((parseInt(arr[i][attr]) == value)) {

      arr.splice(i, 1);

    }
  }
  return arr;
}
router.get('/', function(req, res, next) {
  res.send(stockData);
  console.log("REQUEST RECIEVED")
  //console.log(stockData);
});
setInterval(refreshStockData, 3600000)
function refreshStockData() {
  stockDataDuring = []
  stockData = []

  request('http://www.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download', function(error, response, body) {
    if (error) {
      s
      console.log(error)
    }
    csv({noheader: false}).fromString(body).on('json', (csvRow) => { // this func will be called 3 times
      stockDataDuring.push(csvRow)
    }).on('done', () => {
      request('http://www.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nyse&render=download', function(error, response, body) {
        if (error) {
          console.log(error)
        }
        csv({noheader: false}).fromString(body).on('json', (csvRow) => { // this func will be called 3 times
          stockDataDuring.push(csvRow)
        }).on('done', () => {
          stockDataDuring.forEach((item, index) => {
            if ('MarketCap' in item) {

              if (item.MarketCap.toString().includes('$')) {
                item.MarketCap = item.MarketCap.replace("$", "")
              }

              if (item.MarketCap.toString().includes('M')) {
                item.MarketCap = item.MarketCap.replace("M", "")
                item.MarketCap = parseFloat(item.MarketCap * 1000000)
              } else if (item.MarketCap.toString().includes('B')) {
                item.MarketCap = item.MarketCap.replace("B", "")
                item.MarketCap = parseFloat(item.MarketCap * 1000000000)
              }
              item.MarketCap = parseInt(item.MarketCap * 1000) / 1000

              delete item['Summary Quote']
              delete item.field9
              delete item.IPOyear
              if (parseInt(item.MarketCap) == 0) {
                console.log(item.MarketCap)
              }
            }

          });

          stockDataDuring.reverse()
          stockDataDuring.sort((a, b) => {
            return a.MarketCap - b.MarketCap
          })
          stockDataDuring.reverse()
          stockDataDuring.forEach((item, index) => {

            item.MarketCap = numeral(item.MarketCap).format('0.0a');
            item.MarketCap = item.MarketCap.replace("m", "M")
            item.MarketCap = item.MarketCap.replace("b", "B")
            item.LastSale = "$" + parseFloat(item.LastSale).toFixed(2)
            if (parseInt(item.MarketCap) == 0) {
              delete stockDataDuring[index];
            }
          })

          stockDataDuring = stockDataDuring.filter(function(e) {
            return e
          });

          stockData = stockDataDuring
        })
      })
    })
  });
}
refreshStockData()
module.exports = router;
