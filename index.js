'use strict'
var mainHandler =require('./main.js');
var http = require('http');


http.createServer(mainHandler).listen(process.env.PORT || 8080, function() {
  console.log('Listening on 8080');
});
