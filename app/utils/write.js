'use strict';

var https = require('https');
var google = require('googleapis');
var getinfo = require('./get-info.js')
module.exports = (config,body, cb) => {
  console.log("body towrite",body);
  var opts = {
    hostname: 'sheets.googleapis.com',
    port: 443,
    path: `/v4/spreadsheets/${config.sheetId}/values/mealsheet:append?valueInputOption=USER_ENTERED`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.token}`
    }
  };


  var d = {
    "range": "mealsheet",
    "majorDimension": "ROWS",
    "values": [
      [body.order,body.category, body.email,body.date, body.time,body.name]

    ],
  }


  var req = https.request(opts, function(res) {
    var store = '';
    res.on('data', (chunk) => {
      store = store + chunk
    });
    res.on('end', () => {
      cb(undefined, JSON.parse(store));
    });
  });

  req.on('error', (error) => {
    cb(error, undefined);
  });

  req.write(JSON.stringify(d));
  req.end();
}
