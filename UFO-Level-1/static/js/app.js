// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Grab the data and create tables
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime").property("value");
  
    // Get the value property of the input element
    var inputDate = inputElement.toString(); ;
    console.log(inputDate);

    //Filter the data for the new date  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);

    //Remove the existing rows
    tbody.selectAll("tr").remove();

    //Populate the filtered data
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  });
  

