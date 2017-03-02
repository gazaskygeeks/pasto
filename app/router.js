module.exports = {
  'GET /': require('./gitpages/root.js'),
  'GET /style.css': require('./gitpages/style.js'),
  'GET /dom.js': require('./gitpages/getdom.js'),
  'GET /breakfast': require('./gitpages/breakfast.js'),
  'GET /lunch': require('./gitpages/lunch.js'),
  'POST /order': require('./utils/write.js'),
  'GET /notallowd': require('./gitpages/notallowd.js'),
  'GET /readmemberssheet': require('./utils/readmemberssheet.js'),
  'GET /readpreorderssheet': require('./utils/readpreorder.js'),
  'POST /writeorder': require('./utils/writeorder.js'),
  'GET /img.jpg': require('./img.js'),
  'GET /writedata.js':require('./getwritedata.js')
}
