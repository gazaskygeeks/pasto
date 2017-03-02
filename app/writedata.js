var table = document.getElementById("myTable");

var httppreorders = new XMLHttpRequest();
httppreorders.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var values = JSON.parse(httppreorders.responseText);
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
