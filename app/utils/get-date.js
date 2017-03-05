var moment = require('moment');

function currentdate() {
  var datetime = [];
  var currentdate = new Date();
  datetime[0] = currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) + "/" +
    currentdate.getFullYear();

  datetime[1] = currentdate.getHours() + ":" +
    currentdate.getMinutes();
  return datetime;
}
function srvtime(){
  var now = moment()
  var formatted = now.format('DD/MM/YYYY HH:mm:ss Z')
  console.log(formatted)
    return formatted;
}

module.exports = {
  currentdate: currentdate,
  srvtime: srvtime
}
