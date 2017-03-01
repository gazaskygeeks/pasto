'use strict';

var https = require('https');
var google = require('googleapis');
var getinfo = require('./get-info.js')
module.exports = (config, cb) => {
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
      ["Item", "Cost", "Stocked", "Ship Date"],
      ["aa", "$222.50", "0", "3/1/2016"],
      ["z", "$15", "2", "3/15/2016"],
      ["Eaaaangine", "$100", "1", "30/20/2016"],
      ["Total2222s", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
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
