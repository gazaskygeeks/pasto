
var datetime = require('./currentdate.js');

module.exports = function extractdata(jsondata){
  var alldata =[];
  var todayorders=[];
  var names=[];
  data = jsondata.values;
   console.log('type', typeof data);
   data.forEach(function(elem){
     console.log(elem[0]);
     for (var i = 0; i < elem.length -1; i++) {

       if(elem[i]== datetime.currentdate()[0]){
        console.log('here if');
           todayorders.push(elem[0]);
           names.push(elem[5]);
       }
     }
    console.log(todayorders);
    console.log(names);
  alldata[0] = todayorders;
  alldata[1] = names;
  console.log('alldata', alldata);
  });
  return alldata;

}
