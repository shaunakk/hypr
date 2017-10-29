const express = require('express');
const router = express.Router();
const request = require('request')
const moment = require('moment')
const alpha = require('alphavantage')({key: '9322BZUXBXU4IQMF'});
router.get('/', function(req, res, next) {
  let stockData = {}
  alpha.data.intraday(req.query.stock, 'full', 'json', '30').then(data => {
    stockData.intraday = alpha.util.polish(data);
    console.log(stockData.intraday)
    stockData.y = []
    stockData.x = []
    for (let stockDate in stockData.intraday['Time Series (30min)']) {
      let formattedDate = moment(stockDate).format('MMM D, YYYY h:mmA');
      stockData.y.push(formattedDate)
      stockData.x.push(parseFloat(stockData.intraday['Time Series (30min)'][stockDate].open).toFixed(2))
    }
    stockData.x.reverse()
    stockData.y.reverse()
    delete stockData.intraday
    res.send(stockData)
  });

});

module.exports = router;
