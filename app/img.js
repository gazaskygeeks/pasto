var fs = require('fs');
var img = fs.readFileSync(__dirname + '/../views/assets/img.jpg');
module.exports = function(req, res) {
  res.writeHead(200, {
    'Content-type': 'image/jpeg'
  });
  res.write(img);
  res.end();
};
