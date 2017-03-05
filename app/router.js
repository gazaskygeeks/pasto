module.exports = {
  'GET /': require('./root.js'),
  'GET /style.css': require('./style.js'),
  'GET /dom.js': require('./getdom.js'),
  'GET /orders': require('./orders.js'),
  'POST /order': require('./utils/write.js'),
  'GET /notallowd': require('./notallowd.js'),
  'GET /readmemberssheet': require('./utils/readmemberssheet.js'),
  'GET /readpreorderssheet': require('./utils/readpreorder.js'),
  'POST /writeorder': require('./utils/writeorder.js'),
  'GET /img.jpg': require('./img.js'),
  'GET /writedata.js':require('./getwritedata.js')
}
