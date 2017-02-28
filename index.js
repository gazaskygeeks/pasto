'use strict';

var https = require('https');
var google = require('googleapis');
var key = require('./key.json');
var accessextractdata = require('./server/extractdata.js');

var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';

function getdata(callback){
  var jwtClient = new google.auth.JWT(key.client_email,
    null,
    key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
    null
  );

  jwtClient.authorize((err, tokens) => {
    console.log(tokens);
    if (err) {
      console.log(err);
      return;
    }

    var opts = {
      hostname: 'sheets.googleapis.com',
      port: 443,
      path: `/v4/spreadsheets/${SHEET_ID}/values:batchUpdate`,

      method: 'POST',
      headers: {
              'Authorization': `Bearer ${tokens.access_token}`}

            payload:{  "range": "A5:D5",
            "values": [
              [
                  ss,sss,ss,ss
              ],

            ]}

    };

    var req = https.request(opts, (res) => {
      var store = '';
      res.on('data', (chunk) => store = store + chunk);
      res.on('end', () => {
        console.log("store",store);
      });

    });

    req.end();
  });
}

getdata(function(ss){

  console.log("ss",ss);
});
