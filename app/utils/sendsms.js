'use strict';
var moment = require('moment');
var getinfo = require('./get-date.js');

var app = require('../../app/utils/index.js');
  var client = require('twilio')('AC4549b162aac9452031f82724465d734d','3be2fe57ff5ac237090024d8e05e5f20');

var SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';

var sheetName = 'mealsheet';

  app.auth({
    scope: SCOPE
  }, (err, tokens) => {
    app.read({
      sheetId: SHEET_ID,
      token: tokens.access_token,
      sheetName: sheetName
    }, (err, writeSheet) => {
      var arr = writeSheet[0];
      var sms = JSON.stringify(manipulateorders(arr));
      var hours = parseInt(date.srvtime().substring(11, 13));
      var number ;
      if (hours > 10) {
          number = '+972594100319';
      }else{
          number = '+972599501871';
      }
      sendsms(sms,number);
      console.log('err', err);
      console.log(require('util').inspect(writeSheet, {
        depth: null
      }));

    });
  });


function sendsms(message,number){
  console.log("sdsd");
   client.messages.create({
        from: '+13203320074',
        to: number,
        body: message
      }, function(err, message) {
        if(err) {
          console.log('error');
          console.error(err.message);
        }
      });
    }

  function manipulateorders(arr){
    var map = arr.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
}, {});
return map;
  }

  function time(){}
