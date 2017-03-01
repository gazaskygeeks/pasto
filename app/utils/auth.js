'use strict';

var google = require('googleapis');
var key = require('../../key.json');

module.exports = (config, cb) => {
    var jwtClient = new google.auth.JWT(key.client_email,
        null,
        key.private_key, config.scope,
        null
    );
    jwtClient.authorize(cb);

}
