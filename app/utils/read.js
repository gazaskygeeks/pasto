'use strict';

var https = require('https');
var getinfo = require('./get-info.js');



module.exports = (config, cb) => {
  var opts = {
    hostname: 'sheets.googleapis.com',
    port: 443,
    path: `/v4/spreadsheets/${config.sheetId}/values/mealsheet`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${config.token}`
    }
  }

  var req = https.request(opts, (res) => {
    var store = '';
    res.on('data', (chunk) => store = store + chunk);
    res.on('end', () => {
      var data = JSON.parse(store)
      getinfo.extractdata(data)
    });
  });

  req.on('error', (error) => {
    cb(error, undefined);
  });

  req.end();
}
