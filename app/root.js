var fs = require('fs')
var login = fs.readFileSync(__dirname + '/../../views/login.html', 'utf8')
module.exports = (req, res) => {
  res.end(login);
}
