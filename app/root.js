'use strict';

var fs = require('fs');
var template = require('./utils/template.js');
var loginTmpl = fs.readFileSync(__dirname + '/../views/login.html', 'utf8');

module.exports = (req, res) => {
  res.writeHeader(200, {'Content-Type': 'text/html'});
  var loginRender = template(loginTmpl,{clientId: process.env.GOOGLE_OAUTH_CLIENT_ID});
  res.write(loginRender);
  res.end();
};
