var db = [];
result = {
    email: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
    order: '',
    date: '',
    time: '',
    category:localStorage.getItem("category")
}


var currentdate = new Date();
var time = currentdate.getHours();

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    db.push(profile.getName())
    db.push(profile.getEmail())
    localStorage.setItem("email", profile.getEmail());
    localStorage.setItem("name", profile.getName());


    console.log("inside sign in", "email=" + profile.getEmail());
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var emailsarray = JSON.parse(xhttp.responseText);
            console.log('emailsarray ', emailsarray);
            console.log(time);

              localStorage.setItem("category","breakfast");
                emailsarray.forEach(function(elem) {
                    if (email == elem) {

                        window.location = "/breakfast";

                    }
                });
          
        }
    };

    xhttp.open("GET", "/readmemberssheet", true);
    xhttp.send();
}

function sendorder() {

    var order = document.getElementById("list-input").value;
    var currentdate = new Date();
    var datetime = [];
    datetime[0] = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear();

    datetime[1] = currentdate.getHours() + ":" +
        currentdate.getMinutes();
    result.date = datetime[0];
    result.time = datetime[1];
    result.order = order;
    console.log(result);
    var httpsendorder = new XMLHttpRequest();
    httppreorders.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var values = JSON.parse(httpsendorder.responseText);

        }


    }
    httpsendorder.open("POST", "/writeorder", true);
    httpsendorder.send(JSON.stringify(result));
}





var email = 'shahy.m.93@gmail.com'

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}
