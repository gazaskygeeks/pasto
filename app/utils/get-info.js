var date = require('./get-date.js')

function extractdata(jsondata) {
  var alldata = [];
  var member = [];
  var todayorders = [];
  var names = [];
  data = jsondata.values;
  data.forEach(function(elem) {
    for (var i = 0; i < elem.length - 1; i++) {

      if (elem[i] == date.currentdate()[0]) {
        todayorders.push(elem[0]);
        names.push(elem[1]);
      }
    }
    alldata[0] = todayorders;
    alldata[1] = names;
  });
  return alldata;
}

function extractmembers(jsondata) {
  var member = [];
  data = jsondata.values;
  data.forEach(function(elem) {
    for (var i = 0; i < elem.length - 1; i++) {
        member.push(elem[1]);
    }
  });
  return member;
}
module.exports = {
  extractdata: extractdata,
  extractmembers:extractmembers
}
