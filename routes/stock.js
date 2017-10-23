var express = require('express');
var router = express.Router();
var request = require('request')
var numeral = require('numeral');
var stockData = []
fs = require('fs')

router.get('/', function(req, res, next) {
  res.send(stockData);

});

fs.readFile('stocks.json', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  stockData = JSON.parse(data)
  stockData.forEach((item, index) => {
    if (item.MarketCap.includes('$')) {
      item.MarketCap = item.MarketCap.replace("$", "")
      if (item.MarketCap.toString().includes('M')) {
        item.MarketCap = item.MarketCap.replace("M", "")
        item.MarketCap = parseFloat(item.MarketCap * 1000000)
      } else if (item.MarketCap.toString().includes('B')) {
        item.MarketCap = item.MarketCap.replace("B", "")
        item.MarketCap = parseFloat(item.MarketCap * 1000000000)
      }
      item.MarketCap = parseInt(item.MarketCap * 1000) / 1000
      item.MarketCap = numeral(item.MarketCap).format('0.0a');

      item.MarketCap = item.MarketCap.replace("m", "M")
      item.MarketCap = item.MarketCap.replace("b", "B")
      delete item.LastSale
      delete item['Summary Quote']
      delete item.IPOyear
    } else {
      delete stockData[index]
    }

  })
  stockData = stockData.filter(x => x)
  stockData.sort((a, b) => {
    return a.MarketCap - b.MarketCap
  })
  stockData.reverse()
});
module.exports = router;
