var express = require('express'),
  app = express(),
  fs = require('fs'),
  sys = require('sys'),
  twitter = require('node-tweet-stream'),
  stock = "",
  request = require('request')
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'SdhqyogLOTVt7QJjBcXTbsBHE',
  consumer_secret: 's73WmhkPOm3QcgAM2Yozfn5CelQ36sYoQmdBmKjuVNcJeAlVXk',
  access_token_key: '3303757363-SqSh0Ol7lXzT9lSoPBUDC2flnpTCYF4ORjtE91h',
  access_token_secret: 'bgyjEfAZGBFlok9uSp3vJg67VCw1rGkw0FecLo9THs6Eg'
});

var sentiment = require('sentiment');

var params = {
  screen_name: 'nodejs'
};







app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/build');
app.get('/', function(request, response) {
  response.sendFile('/views/index.html');
});
app.get('/stock', function(request, response) {
  response.sendFile('/views/index.html');
});
server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
var str
var sent
io = require('socket.io')(server);
io.on('connection', function(socket) {
  console.log('A user connected');

  socket.on('stock', function(data) {
    str = data.toString()
    client.get('search/tweets.json', {
      q: str,
      count: 50
    }, function(error, tweets, response) {
      if (typeof tweets == undefined) {
        console.log(JSON.stringify(tweets));
        for (i = 0; i < tweets.statuses.length; i++) {
          sent = sentiment(tweets.statuses[i].text)
          tweets.statuses[i].sentiment = sent
        }
        socket.emit("tweet", tweets)
      }
    });
    console.log(str)

  });
})
