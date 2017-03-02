var fs = require('fs');
var style = fs.readFileSync(__dirname + '/../../css/style.css', {
  encoding: 'utf8'
});
module.exports = function(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/css'
  });
  res.write(style);
  res.end();
};
