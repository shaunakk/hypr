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
  stockData = data
});
