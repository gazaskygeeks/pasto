var test = require('tape');
var getinfo = require('../app/utils/get-info.js');
var mock = require('./mock.js');

test("extractdata should return the right data", function(t) {
  var data = getinfo.extractdata(mock);
  var simulatedata = [
    ['chicken pizza', 'shawerma', 'book'],
    ['mhmdshorafa', 'mhmdmushtaha', 'abeer']
  ]
  t.deepEqual(data, simulatedata, "Data is Correct");
  t.end();
});
