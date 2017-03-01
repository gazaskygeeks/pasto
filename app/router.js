module.exports = {
    'GET /': require('./root.js'),
    'GET /style.css': require('./style.js'),
    'GET /dom.js': require('./getdom.js'),
    'GET /breakfast': require('./breakfast.js'),
    'GET /lunch': require('./lunch.js'),
    'POST /order': require('./utils/write.js'),
    'GET /notallowd': require('./notallowd.js')
}
