var fs = require('fs')
var breakfast = fs.readFileSync(__dirname + '/../views/orders.html', 'utf8')
module.exports = (req, res) => {
  res.end(breakfast);
}
