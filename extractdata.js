var datetime = require('./currentdate.js');

function extractdata(jsondata){
  var todayorders=[];
  jsondata = JSON.parse(jsondata).values;
  jsondata.reduce(function(acc,curr,index){
    curr.reduce(function(inacc,incurr,inindex){

      console.log(index,curr[inindex],inindex);
      if(curr[inindex]==datetime.currentdate()[0]){
        console.log(curr[inindex] +"="+datetime.currentdate()[0]);
        console.log(curr[inindex]);
        todayorders.push(curr[0]);
      }

    },0);
    console.log(todayorders);

  });
}
module.exports = {
extractdata : extractdata

}
