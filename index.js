'use strict'

require('dotenv').config();
var http = require('http');
var mainHandler =require('./main.js');
var PORT = process.env.PORT || 8080;

http.createServer(mainHandler).listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});
