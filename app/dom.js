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

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
};
xhttp.open("GET", "/readmemberssheet", true);
xhttp.send(result[1]);
