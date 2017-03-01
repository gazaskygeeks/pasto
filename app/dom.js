var result = [];

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  result.push(profile.getName())
  result.push(profile.getEmail())
  console.log('result', result);

}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });
}
console.log('here1');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  console.log('here', this.readyState);
  console.log('here', this.status);
  if (this.readyState == 4 && this.status == 200) {
    console.log('xhttp ', xhttp.responseText);
  }
};
xhttp.open("GET", "/readmemberssheet", true);
xhttp.send();
