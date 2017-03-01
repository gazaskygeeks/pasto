'use strict';

var app = require('./app/index.js');

var SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
var SHEET_ID = '1DY-JnL0myVggCoFIobL8FNIO3qlGg7mQOi97tzx8M4Q';

app.auth({
    scope: SCOPE
}, (err, tokens) => {
    app.write({
        sheetId: SHEET_ID,
        token: tokens.access_token
    }, (err, writeSheet) => {
        console.log('err', err);
        console.log(require('util').inspect(writeSheet, {
            depth: null
        }));
    });

})
