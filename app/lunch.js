var fs = require('fs')
var lunch = fs.readFileSync(__dirname + '/../views/lunch.html', 'utf8' )
module.exports = (req, res) => {
  res.end(lunch);
}
