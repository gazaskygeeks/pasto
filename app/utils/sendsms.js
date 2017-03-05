'use strict';

var app = require('../../app/utils/index.js');
  var client = require('twilio')('AC4549b162aac9452031f82724465d734d','3be2fe57ff5ac237090024d8e05e5f20');

var SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';
var sheetName = 'mealsheet'
module.exports = ((req, res) => {
  app.auth({
    scope: SCOPE
  }, (err, tokens) => {
    app.read({
      sheetId: SHEET_ID,
      token: tokens.access_token,
      sheetName: sheetName
    }, (err, writeSheet) => {

      sendsms(JSON.stringify(writeSheet));
      console.log('err', err);
      console.log(require('util').inspect(writeSheet, {
        depth: null
      }));
      console.log("before client message");


  //    res.end(JSON.stringify(writeSheet));
    });
  });
})()

function sendsms(message){
  console.log("sdsd");
   client.messages.create({
        from: '+13203320074',
        to: '+972594100319',
        body: message
      }, function(err, message) {
        if(err) {
          console.log('error');
          console.error(err.message);
        }
      });}
