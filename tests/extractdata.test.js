var test = require('tape');
var extractdata = require('../server/extractdata.js');
var mock = require('./mock.js');

test("extractdata should return the right data", function(t) {
  var data = extractdata(mock);
  var simulatedata = [
    ['chicken pizza', 'shawerma', 'book'],
    ['mhmdshorafa', 'mhmdmushtaha', 'abeer']
  ]
  t.deepEqual(data, simulatedata, "Data is Correct");
  t.end();
});
