const express = require('express');
const router = express.Router();
const request = require('request')
const moment = require('moment')
const alpha = require('alphavantage')({key: '9322BZUXBXU4IQMF'});
router.get('/', function(req, res, next) {
  let stockData = {}
  alpha.data.intraday(req.query.stock, 'full', 'json', '15').then(data => {
    stockData.intraday = alpha.util.polish(data);
    stockData.intradayData = []
    for (let stockDate in stockData.intraday['Time Series (15min)']) {
      let formattedDate = moment(stockDate).format('M/D/YY h:mmA');
      stockData.intradayData.push({'time': formattedDate, 'info': stockData.intraday['Time Series (15min)'][stockDate]
      })
      console.log(stockDate)
    }
    delete stockData.intraday['Time Series (15min)']
    res.send(stockData)
  });

});

module.exports = router;
