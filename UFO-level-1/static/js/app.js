



//Data pulled from data.js
var Data = data;

//pulled from index.html
var $tbody = document.querySelector("tbody");
var $searchDate = document.querySelector("#datetime");
var $filterDateButton = document.querySelector("#filter-btn");


//event listener to respond to click
$filterDateButton.addEventListener("click", filterBtnClick);

function filterBtnClick(event) {
  event.preventDefault();

  var filterDate = $searchDate.value.trim();
  if (filterDate != "") {
    Data = data.filter(function (data) {
      var inputDate = data.datetime;
      return inputDate === filterDate;
    });
};

displayTable();
}

function displayTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < Data.length; i++) {
    var data = Data[i];
    var fields = Object.keys(data);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}


displayTable();