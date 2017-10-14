var express = require('express'),
  app = express(),
  fs = require('fs'),
  sys = require('sys'),
  twitter = require('node-tweet-stream')


var t = new twitter({
  consumer_key: 'SdhqyogLOTVt7QJjBcXTbsBHE',
  consumer_secret: 's73WmhkPOm3QcgAM2Yozfn5CelQ36sYoQmdBmKjuVNcJeAlVXk',
  token: '3303757363-SqSh0Ol7lXzT9lSoPBUDC2flnpTCYF4ORjtE91h',
  token_secret: 'bgyjEfAZGBFlok9uSp3vJg67VCw1rGkw0FecLo9THs6Eg'
});

t.on('tweet', function(tweet) {
  console.log('tweet received', tweet)
  io.emit(tweet);
})

t.on('error', function(err) {
  console.log('Oh no')
})

t.track('stock')
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/views'));

// views is directory for all template files
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
io = require('socket.io')(server);
