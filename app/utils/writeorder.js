'use strict';

var app = require('../../app/utils/index.js');
var getinfo = require('./get-info.js');

var SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';


module.exports = (req, res) => {
  getinfo.parseBody(req,(err,body)=>{
  console.log("body" ,body);

  });

  //
  // app.auth({
  //   scope: SCOPE
  // }, (err, tokens) => {
  //   app.write({},(err, writeSheet) => {
  //     console.log('err', err);
  //     console.log(require('util').inspect(writeSheet, {
  //       depth: null
  //     }));
  //     res.end(JSON.stringify(writeSheet));
  //   });
  // });
}
