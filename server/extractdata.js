
var datetime = require('./currentdate.js');

function extractdata(jsondata){
  var alldata =[];
  var todayorders=[];
  var names=[];
  jsondata = JSON.parse(jsondata).values;
  jsondata.reduce(function(acc,curr,index){
    curr.reduce(function(inacc,incurr,inindex){

      console.log(index,curr[inindex],inindex);
      if(curr[inindex]==datetime.currentdate()[0]){
        console.log(curr[inindex] +"="+datetime.currentdate()[0]);
        console.log(curr[inindex]);
        todayorders.push(curr[0]);
        names.push(curr[5]);
      }

    },0);
  alldata[0] = todayorders;
  alldata[1] = names;
  console.log(alldata);
  });
}
module.exports = {
extractdata : extractdata

}
