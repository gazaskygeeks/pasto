'use strict';

var https = require('https');
var getinfo = require('./get-info.js')

module.exports = (config, cb) => {
  var opts = {
    hostname: 'sheets.googleapis.com',
    port: 443,
    path: `/v4/spreadsheets/${config.sheetId}/values/${config.sheetName}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${config.token}`
    }
  }

  var req = https.request(opts, (res) => {
    console.log("inside request");
    var store = '';
    res.on('data', (chunk) => store = store + chunk);
    res.on('end', () => {
      var data = JSON.parse(store);
      console.log("before if",data);
      if (config.sheetName === 'sheet4') {
        console.log("inside if");
        data = getinfo.extractmembers(data)
        console.log(data);
      } else {
        console.log("inside else");
        data = getinfo.extractdata(data)

      }
      cb(undefined, data);
    });
  });

  req.on('error', (error) => {
    cb(error, undefined);
  });

  req.end();
}
