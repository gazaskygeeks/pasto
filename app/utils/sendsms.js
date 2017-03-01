function send(message){
  var client = require('twilio')('AC4549b162aac9452031f82724465d734d','3be2fe57ff5ac237090024d8e05e5f20');
client.messages.create({
  from: '+13203320074',
  to: '+972599308956',
  body: message
}, function(err, message) {
  if(err) {
    console.log('error');
    console.error(err.message);
  }
});
}

module.exports = {
  send: send
}
