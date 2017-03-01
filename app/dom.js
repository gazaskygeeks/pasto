var result = [];
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  result.push(profile.getName())
  result.push(profile.getEmail())
  console.log('result', result);
}
function test() {
  console.log('tttttttttttttttttttttttt');  
}
