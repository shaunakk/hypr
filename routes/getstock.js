const express = require('express');
const router = express.Router();
const request = require('request')
const moment = require('moment')
const alpha = require('alphavantage')({key: '9322BZUXBXU4IQMF'});
router.get('/', function(req, res, next) {
  let stockData = {}
  alpha.data.intraday(req.query.stock, 'full', 'json', '30').then(data => {
    stockData.intraday = alpha.util.polish(data);
    stockData.y = []
    stockData.x = []
    for (let stockDate in stockData.intraday['Time Series (30min)']) {
      let formattedDate = moment(stockDate).format('MMM D, YYYY h:mmA');
      stockData.y.push(formattedDate)
      stockData.x.push(parseFloat(stockData.intraday['Time Series (30min)'][stockDate].open).toFixed(2))
    }
    stockData.x.reverse()
    stockData.y.reverse()
    stockData.wx = stockData.x.slice(-70)
    stockData.wy = stockData.y.slice(-70)
    alpha.data.daily(req.query.stock, 'compact', 'json').then(data => {
      stockData.intraday = alpha.util.polish(data);
      stockData.dailyx = []
      stockData.dailyy = []
      for (let stockDate in stockData.intraday['data']) {
        let formattedDate = moment(stockDate).format('MMM D, YYYY');
        stockData.dailyx.push(formattedDate)
        stockData.dailyy.push(parseFloat(stockData.intraday['data'][stockDate].open).toFixed(2))
      }
      stockData.dailyx.reverse()
      stockData.dailyy.reverse()

      alpha.data.weekly(req.query.stock, 'full', 'json').then(data => {
        stockData.intraday = alpha.util.polish(data);
        stockData.weeklyx = []
        stockData.weeklyy = []
        for (let stockDate in stockData.intraday['data']) {
          let formattedDate = moment(stockDate).format('MMM D, YYYY');
          stockData.weeklyx.push(formattedDate)
          stockData.weeklyy.push(parseFloat(stockData.intraday['data'][stockDate].open).toFixed(2))
        }
        stockData.weeklyx.reverse()
        stockData.weeklyy.reverse()
        stockData.yx = stockData.weeklyx.slice(-52)
        stockData.yy = stockData.weeklyy.slice(-52)
        delete stockData.intraday
        res.send(stockData)
      });
    });

  });

});

module.exports = router;
