var fs = require('fs');
var getwritedata = fs.readFileSync(__dirname + '/../writedata.js', {
  encoding: 'utf8'
});
module.exports = function(req, res) {
  res.writeHead(200, {
    'Content-type': 'application/javascript'
  });
  res.write(getwritedata);
  res.end();
};
