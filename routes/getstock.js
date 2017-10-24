var express = require('express');
var router = express.Router();
var request = require("request")
function getStock(stockTicker) {
  return stockTicker
}
router.get('/', function(req, res, next) {
  res.send(getStock(req.query.stock));
});

module.exports = router;
