'use strict';

var https = require('https');
var google = require('googleapis');
var key = require('./key.json');
var accessextractdata = require('./server/extractdata.js');

var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';

function getdata(callback){
  var jwtClient = new google.auth.JWT(key.client_email,
    null,
    key.private_key, ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    null
  );

  jwtClient.authorize((err, tokens) => {
    if (err) {
      console.log(err);
      return;
    }

    var opts = {
      hostname: 'sheets.googleapis.com',
      port: 443,
      path: `/v4/spreadsheets/${SHEET_ID}/values/mealsheet`,
      method: 'GET',
      headers: {
              'Authorization': `Bearer ${tokens.access_token}`
      }
    };

    var req = https.request(opts, (res) => {
      var store = '';
      res.on('data', (chunk) => store = store + chunk);
      res.on('end', () => {
      //  var data = accessextractdata.extractdata(store)
        console.log("store",store);
      //  callback(data);
      });

    });

    req.end();
  });
}

getdata(function(ss){

  console.log("ss",ss);
});
