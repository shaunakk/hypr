const express = require('express');
const router = express.Router();
const request = require('request')
const moment = require('moment')
const alpha = require('alphavantage')({key: '9322BZUXBXU4IQMF'});
router.get('/', function(req, res, next) {
  let stockData = {}
  alpha.data.intraday(req.query.stock, 'compact', 'json', '15').then(data => {
    stockData.intraday = alpha.util.polish(data);
    console.log(stockData.intraday)
    stockData.y = []
    stockData.x = []
    for (let stockDate in stockData.intraday['Time Series (15min)']) {
      let formattedDate = moment(stockDate).format('M/D/YY h:mmA');
      stockData.y.push(formattedDate)
      stockData.x.push(stockData.intraday['Time Series (15min)'][stockDate].open)
    }
    stockData.x.reverse()
    stockData.y.reverse()
    delete stockData.intraday
    res.send(stockData)
  });

});

module.exports = router;
