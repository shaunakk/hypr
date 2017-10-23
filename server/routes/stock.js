var express = require('express');
var router = express.Router();
var request = require('request')
var stockData = []
fs = require('fs')

router.get('/', function(req, res, next) {
  res.send(stockData);

});

module.exports = router;
fs.readFile('stocks.json', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  JSON.parse(data).forEach((item, index) => {
    stockData.push({
      "a": item.FIELD2,
      "b": item.FIELD3,
      "c": item.FIELD2 + item.FIELD3
    })
  })
});
