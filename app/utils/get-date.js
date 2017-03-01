function currentdate() {
  var currentdate = new Date();
  var datetime = [];
  datetime[0] = currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) + "/" +
    currentdate.getFullYear();

  datetime[1] = currentdate.getHours() + ":" +
    currentdate.getMinutes();
  return datetime;
}
module.exports = {
  currentdate: currentdate
}
