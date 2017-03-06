'use strict';

var test = require('tape');
var shot = require('shot');
var mainHandler = require('../main.js');
var getinfo = require('../app/utils/get-info.js');
var getdate = require('../app/utils/get-date.js');
var read = require('../app/utils/read.js');
var app = require('../app/utils/index.js');
var mock = require('./mock.js');

var testdatetime = [];
var testDateTime = new Date();
testdatetime[0] = testDateTime.getDate() + '/' + (testDateTime.getMonth() + 1) + '/' + testDateTime.getFullYear();
testdatetime[1] = testDateTime.getHours() + ':' + testDateTime.getMinutes();

test('get-date.js should return arry of date and time', function(t) {
  var time = getdate.currentdate();
  t.deepEqual(time, testdatetime, 'Data is Correct');
  t.end();
});

// test('extractdata should return the right data', function(t) {
//   var data = getinfo.extractdata(mock);
//   var simulatedata = [
//     ['book'],
//     ['abeer']
//   ];
//
//   t.deepEqual(data, simulatedata, 'Data is Correct');
//   t.end();
// });

test('read.js should read sheet files', function(t) {

  var expcted = [
    'Email',
    'abber2000g@gmail.com',
    'ibraghada@gmail.com',
    'alaakhattab92@gmail.com',
    'shahy.m.93@gmail.com',
    'rana@gazaskygeeks.com',
    'a.alshaikh82@gmail.com',
    'Akram.badah@gmail.com',
    'muhamed.mushtaha@outlook.com',
    'Moha.buy@gmail.com'
  ];

  shot.inject(mainHandler, {
    method: 'GET',
    url: '/readmemberssheet'
  }, function(res) {
    var result = res.payload
    var parseresult = JSON.parse(result)
    t.deepEqual(parseresult,expcted, 'got member emails');
    t.end();
  });
});
