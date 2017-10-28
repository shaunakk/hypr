var express = require('express');
var router = express.Router();
var request = require('request')
var numeral = require('numeral');
const csv = require('csvtojson')
var stockData = []
fs = require('fs')

router.get('/', function(req, res, next) {
  res.send(stockData);

});
var result
var csvData
var request = require('request');
request('http://www.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download', function(error, response, body) {
  if (error) {
    console.log(error)
  }
  csv({noheader: false}).fromString(body).on('json', (csvRow) => { // this func will be called 3 times
    stockData.push(csvRow)
    console.log(csvRow)
  }).on('done', () => {
    stockData.forEach((item, index) => {

      if (item.MarketCap != '0' || item.MarketCap != 'n/a') {
        item.MarketCap = item.MarketCap.replace("$", "")
        if (item.MarketCap.toString().includes('M')) {
          item.MarketCap = item.MarketCap.replace("M", "")
          item.MarketCap = parseFloat(item.MarketCap * 1000000)
        } else if (item.MarketCap.toString().includes('B')) {
          item.MarketCap = item.MarketCap.replace("B", "")
          item.MarketCap = parseFloat(item.MarketCap * 1000000000)
        }
        item.MarketCap = parseInt(item.MarketCap * 1000) / 1000

        delete item.LastSale
        delete item['Summary Quote']
        delete item.field9
        delete item.IPOyear
      } else {
        delete item
      }
    });
    stockData = stockData.filter(x => x)
    stockData.sort((a, b) => {
      return a.MarketCap - b.MarketCap
    })
    stockData.forEach((item, index) => {
      item.MarketCap = numeral(item.MarketCap).format('0.0a');
      item.MarketCap = item.MarketCap.replace("m", "M")
      item.MarketCap = item.MarketCap.replace("b", "B")
    })
    stockData.reverse()

  })

});

module.exports = router;
