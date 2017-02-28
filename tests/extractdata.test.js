
var test = require('tape');
var extractdata = require('../server/extractdata.js');
var mock = require('./mock.js');

test("extractdata should return the right data",function(t){
   var data = extractdata(mock);
   console.log("data",data);
   t.end();
});
