'use strict';

var test = require('tape');
var shot = require('shot');
var mainHandler = require('../main.js');

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
    var indexOf = res.payload.indexOf('Ǻ6Fp');
    t.equal(indexOf, -1, 'got Ǻ6Fp somewhere in the html');
    t.end();
  });
});

test('GET /: should return order.html', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/orders'
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