var db = [];
result ={
  email:localStorage.getItem("email"),
  order:''
}


var currentdate = new Date();
var time = currentdate.getHours();

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    db.push(profile.getName())
    db.push(profile.getEmail())
    localStorage.setItem("email", profile.getEmail());


    console.log("inside sign in", "email=" + profile.getEmail());
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

function sendorder() {

    var order = document.getElementById("list-input").value;
    result.order = order;
    console.log(result);
    var httpsendorder = new XMLHttpRequest();
    httppreorders.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var values = JSON.parse(httpsendorder.responseText);

        }


    }
    httpsendorder.open("POST", "/writeorder", true);
    httpsendorder.send(result);
}





var email = 'shahy.m.93@gmail.com'

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}






function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime());
var expires = "expires="+d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=http://localhost:8080/";
}
function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return
}
