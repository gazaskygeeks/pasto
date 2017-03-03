'use strict';

var https = require('https');
var google = require('googleapis');
var key = require('./key.json');
var accessextractdata = require('./server/extractdata.js');


var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';
var body =  {
  "range": "mealsheet!A1:D1",
  "majorDimension": "ROWS",
  "values":
  [  ["Door", "$15", "2", "3/15/2016"],
],
} ;
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

   var options = {
    auth: "https://www.googleapis.com/oauth2/v1/certs",
    spreadsheetId: '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q',
    valueInputOption: "RAW",
    data: [
        {
            range: "mealsheet!A1:D1",
            majorDimension: "ROWS",
            values: [0,0,0,1,2,3]
        }
    ]
};
var sheets = google.sheets('v4');
//console.log(sheets);
var req1 = sheets.spreadsheets.values.batchUpdate(options, function(err, res) {
    console.log(res);
    console.log(err);
})

//console.log("res1",res1);

    // var range = "mealsheet!A1:D1"
    //
    //
    // var opts = {
    //   hostname: 'sheets.googleapis.com',
    //   port: 443,
    //   path: "/v4/spreadsheets/values/".append(SHEET_ID,body)
    //   ,
    //   method: 'POST',
    //   headers: {
    //           'Authorization': `Bearer ${tokens.access_token}`
    //         }
    //
    // };

    //
    var req = https.request(req1, (res) => {
    //  var store = '';
    //  res.on('data', (chunk) => store = store + chunk);
    //  res.on('end', () => {
    //    console.log("store",store);
      });

    });

    //req1.end();

}

getdata(function(ss){

  //console.log("ss",ss);
});
