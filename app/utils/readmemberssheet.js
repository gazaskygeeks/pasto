'use strict';

var app = require('../../app/utils/index.js');

var SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
var SHEET_ID = '17JiGmBjoKvvau12o7PDoONwYNXHQ2fwjkEt9d3jhA3w';
var sheetName = 'sheet4'
module.exports = (req, res) => {
  app.auth({
    scope: SCOPE

  }, (err, tokens) => {
    app.read({
      sheetId: SHEET_ID,
      token: tokens.access_token,
      sheetName: sheetName
    }, (err, writeSheet) => {
      console.log('err', err);
      console.log(require('util').inspect(writeSheet, {
        depth: null
      }));
          console.log("Require autherise");
      res.end(JSON.stringify(writeSheet));
    });
  });
}
