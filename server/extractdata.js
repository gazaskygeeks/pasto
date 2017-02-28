
var datetime = require('./currentdate.js');

module.exports = function extractdata(jsondata){
  var alldata =[];
  var todayorders=[];
  var names=[];
  data = jsondata.values;
   data.forEach(function(elem){
     for (var i = 0; i < elem.length -1; i++) {

       if(elem[i]== datetime.currentdate()[0]){
           todayorders.push(elem[0]);
           names.push(elem[5]);
       }
     }
  alldata[0] = todayorders;
  alldata[1] = names;
  });
  return alldata;

}
