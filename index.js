'use strict'
var http = require('http');
var router = require('./app/router.js');
var mainHandler = function(req, res) {
  var path = req.method + ' ' + req.url;
  console.log('path ', path);
  try {
    router[path](req, res);
  } catch (err) {
    console.log('path', path);
    console.log('err', err);
    res.end('Not found');
  }
};

http.createServer(mainHandler).listen(process.env.PORT || 8080, function() {
  console.log('Listening on 8080');
});
