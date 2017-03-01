'use strict';

var app = require('../../app/index.js');

var SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';
var sheetName = 'mealsheet'
module.exports = (req, res) => {
  console.log("inside preorder.js file");
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
            res.end(JSON.stringify(writeSheet));
        });
    });
}
