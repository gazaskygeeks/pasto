function extractdata(jsondata){
  jsondata = JSON.parse(jsondata).values;
  jsondata.reduce(function(acc,curr,index){
    curr.reduce(function(inacc,incurr,inindex){
      console.log(index,curr[inindex]);


    },0);

  });
}
module.exports = {
extractdata : extractdata

}
