var test = require('tape');
var shot = require('shot');
var mainHandler = require('../main.js');
var getinfo = require('../app/utils/get-info.js');
var mock = require('./mock.js');

test('GET /: should return login.html', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/'
  }, function(res) {
    console.log('res.payload',res.payload)
    var indexOf = res.payload.indexOf('div');
    console.log('indexOf',indexOf);
    t.notEqual(indexOf, -1, 'got div somewhere in the html');
    t.equal(res.statusCode, 200, 'got 200 status code');
    t.end();
  });
});

test('GET /: should return breakfast.html', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/breakfast'
  }, function(res) {
    var indexOf = res.payload.indexOf('table');
    t.notEqual(indexOf, -1, 'got table somewhere in the html');
    t.equal(res.statusCode, 200, 'got 200 status code');
    t.end();
  });
});

test('GET /: should return lunch.html', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/lunch'
  }, function(res) {
    var indexOf = res.payload.indexOf('table');
    t.notEqual(indexOf, -1, 'got table somewhere in the html');
    t.equal(res.statusCode, 200, 'got 200 status code');
    t.end();
  });
});

test("extractdata should return the right data", function(t) {
  var data = getinfo.extractdata(mock);
  var simulatedata = [
    ['chicken pizza', 'shawerma', 'book'],
    ['mhmdshorafa', 'mhmdmushtaha', 'abeer']
  ]
  t.deepEqual(data, simulatedata, "Data is Correct");
  t.end();
});
