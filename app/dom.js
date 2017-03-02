var result = [];
var currentdate = new Date();
var time = currentdate.getHours()

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  result.push(profile.getName())
  result.push(profile.getEmail())

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var emailsarray = JSON.parse(xhttp.responseText);
      console.log('emailsarray ', emailsarray);
      if (time <= 10) {
        emailsarray.forEach(function(elem) {
          if (email == elem) {
            window.location = "/breakfast";
          }
        });
      } else {
        emailsarray.forEach(function(elem) {
          if (email == elem) {
            window.location = "/lunch";
          }
        });
      }
    }
  };

  xhttp.open("GET", "/readmemberssheet", true);
  xhttp.send();
}


var email = 'shahy.m.93@gmail.com'

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });
}
