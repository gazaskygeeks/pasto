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
testdatetime[0] = testDateTime.getDate() + "/" + (testDateTime.getMonth() + 1) + "/" + testDateTime.getFullYear();
testdatetime[1] = testDateTime.getHours() + ":" + testDateTime.getMinutes();

test('GET /: should return Error', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/somthing'
  }, function(res) {
    var indexOf = res.payload.indexOf('div');
    t.equal(indexOf, -1, 'got div somewhere in the html');
    t.end();
  });
});

test('GET /: should return login.html', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/'
  }, function(res) {
    var indexOf = res.payload.indexOf('div');
    console.log('indexOf', indexOf);
    t.notEqual(indexOf, -1, 'got div somewhere in the html');
    t.end();
  });
});

test('GET /: should return no-allowed.html', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/notallowd'
  }, function(res) {
    var indexOf = res.payload.indexOf('Soory');
    t.notEqual(indexOf, -1, 'got Soory somewhere in the html');
    t.end();
  });
});

test('GET /: should return img.jpg', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/img.jpg'
  }, function(res) {
    // console.log('res.payload', res.payload)
    var indexOf = res.payload.indexOf('Ǻ6Fp');
    t.notEqual(indexOf, -1, 'got Ǻ6Fp somewhere in the html');
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
    t.end();
  });
});

test('GET /: should return style.css', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/style.css'
  }, function(res) {
    var indexOf = res.payload.indexOf('container');
    t.notEqual(indexOf, -1, 'got calss container somewhere in the html');
    t.end();
  });
});

test('GET /: should return dom.js', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/dom.js'
  }, function(res) {
    var indexOf = res.payload.indexOf('xhttp');
    t.notEqual(indexOf, -1, 'got var xhttp somewhere in the html');
    t.end();
  });
});

test('GET /: should return writedata.js', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/writedata.js'
  }, function(res) {
    var indexOf = res.payload.indexOf('tableRef');
    t.notEqual(indexOf, -1, 'got method tableRef somewhere in the html');
    t.end();
  });
});

test("get-date.js should return arry of date and time", function(t) {
  var time = getdate.currentdate();
  t.deepEqual(time, testdatetime, "Data is Correct");
  t.end();
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
var expcted = ["Email", "abber2000g@gmail.com", "ibraghada@gmail.com", "alaakhattab92@gmail.com", "shahy.m.93@gmail.com", "rana@gazaskygeeks.com", "a.alshaikh82@gmail.com", "Akram.badah@gmail.com", "muhamed.mushtaha@outlook.com", "Moha.buy@gmail.com"]
test('read.sj should read sheet files', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/readmemberssheet'
  }, function(res) {
    var result = res.payload
    var parseresult = JSON.parse(result)
    t.deepEqual(parseresult,expcted, 'got member emails');
    t.end();
  });
})
