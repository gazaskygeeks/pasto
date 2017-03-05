var table = document.getElementById("myTable");

var httppreorders = new XMLHttpRequest();

httppreorders.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        writefoodmenu();

        var values = JSON.parse(httppreorders.responseText);
        console.log(values);
        var mealname = values[0]
        var emails = values[1]
        var tableRef = table.getElementsByTagName('tbody')[0];
        for (var i = 0; i < mealname.length; i++) {
            var newRow = tableRef.insertRow(tableRef.rows.length);
            var newCell = newRow.insertCell(0);
            var newCell2 = newRow.insertCell(1);
            var newText = document.createTextNode(emails[i]);
            var newText2 = document.createTextNode(mealname[i]);
            newCell.appendChild(newText);
            newCell2.appendChild(newText2);
        }
    }
};
httppreorders.open("GET", "/readpreorderssheet", true);
httppreorders.send();

function writefoodmenu() {
    var localTime = new Date().getHours();
    var mealcategory = "";
    if (localTime > 10) {

        mealcategory = "lunch";
    } else {
        mealcategory = "breakfast";
    }
    var str = '';
    var breakfast = new Array("white cheese", "yellow cheese", "puck cheese");
    var lunch = new Array("shesh tawok", "hamburger", "eshnetsel", "kabab", "shawerma");
    if (mealcategory == "breakfast") {

        for (var i = 0; i < breakfast.length; ++i) {
            str += '<option value="' + breakfast[i] + '" />';
        }
    } else {
        for (var i = 0; i < lunch.length; ++i) {
            str += '<option value="' + lunch[i] + '" />';
        }
    }

    document.getElementById("browser").innerHTML = str;
}
