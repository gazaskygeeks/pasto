
var result = {
    email: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
    order: '',
    date: '',
    time: '',
    category:localStorage.getItem("category")
}
var email = localStorage.getItem("email");

var currentdate = new Date();
var time = currentdate.getHours();

function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    localStorage.setItem("email", profile.getEmail());
    localStorage.setItem("name", profile.getName());

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var emailsarray = JSON.parse(xhttp.responseText);
              console.log(emailsarray);
              localStorage.setItem("category",setcategory());

              var verify = verifyemail(emailsarray);
              if(verify==1){
                window.location = "/orders";
              }
              else {
                window.location = "/notallowd";
              }

        }
    };

    xhttp.open("GET", "/readmemberssheet", true);
    xhttp.send();
}



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
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
    var httpsendorder = new XMLHttpRequest();
    httppreorders.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var values = JSON.parse(httpsendorder.responseText);

        }


    }
    httpsendorder.open("POST", "/writeorder", true);
    httpsendorder.send(JSON.stringify(result));
}

function setcategory(){
  var localTime = new Date().getHours();
  var mealcategory = "";
  if (localTime > 10) {

      mealcategory = "lunch";
  } else {
      mealcategory = "breakfast";
  }
  return mealcategory;
}
function verifyemail(emailsarr){
  var ok = 0;
  emailsarr.forEach(function(elem) {

      if (email == elem) {

         ok = 1 ;
      }
                   });
return ok;

}
