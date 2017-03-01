var fs = require('fs')
var breakfast = fs.readFileSync(__dirname + '/../views/breakfast.html', 'utf8' )
module.exports = (req, res) => {
  res.end(breakfast);
}
