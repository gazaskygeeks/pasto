var fs = require('fs');
var dom = fs.readFileSync(__dirname + '/./dom.js', {
    encoding: 'utf8'
});
module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-type': 'application/javascript'
    });
    res.write(dom);
    res.end();
};
