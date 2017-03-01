var fs = require('fs')
var error = fs.readFileSync(__dirname + '/../views/no-allowed.html', 'utf8' )
module.exports = (req, res) => {
  res.end(error);
}
