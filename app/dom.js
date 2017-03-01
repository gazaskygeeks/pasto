var result = [];
var currentdate = new Date();
var time = currentdate.getHours()

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    result.push(profile.getName())
    result.push(profile.getEmail())
}
var email = 'shahy.m.93@gmail.com'

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var emailsarray = JSON.parse(xhttp.responseText);
        if (time > 10) {
            console.log('here');
            emailsarray.forEach(function(elem) {
                console.log('here1');
                if (elem == email) {
                  console.log("before getpreprders");
                    getpreprders("http://localhost:8080/readpreorderssheet");
                  //  window.location = "/breakfast";
                }
            });
        }
    }
};

xhttp.open("GET", "/readmemberssheet", true);
xhttp.send();

function getpreprders(url) {

    var httppreorders = new XMLHttpRequest();
    httppreorders.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var values = JSON.parse(httppreorders.responseText);
             var table = document.getElementById("myTable");
            //  console.log(table,"table");
            //  var header = table.createTHead();
            //  var row = header.insertRow(0);
            //  var cell1 = row.insertCell(0).innerHTML = "<b>Dev</b>";
            //  var cell2 = row.insertCell(1).innerHTML = "<b>Meal</b>";
            //  console.log(cel1);

        }
    };
    httppreorders.open("GET", url, true);
    httppreorders.send();
}
