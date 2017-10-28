var express = require('express');
var router = express.Router();
var http = require("http");
setInterval(function() {
  http.get("http://hypedesk.herokuapp.com");
}, 300000);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'HypeDesk'});
});

module.exports = router;
