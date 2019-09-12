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
  
  var filterData = [];
    // Get the value property of the input element
  var inputValue = inputElement.property("value");

  filterData["date"] = d3.select("#datetime").property("value");
  filterData["city"] = d3.select("#cityfilter").property("value");
  filterData["state"] = d3.select("#statefilter").property("value");
  filterData["country"] = d3.select("#countryfilter").property("value");
  filterData["shape"] = d3.select("#shapefilter").property("value");

  //code for the date select
  if ((ufo.datetime === filterbyparams["date"]{
    var inputElement = d3.select("#datetime").property("value");
    var inputDate = inputElement.toString();  
    var filterData = tableData.filter(ufo => ufo.datetime === inputDate)
  };

  //code for city select
    var inputElement = d3.select("#cityselect").property("value");
    var inputCity = inputElement.toString();  
    var filterData = tableData.filter(ufo => ufo.city === inputCity)

  //code for state select
  var inputElement = d3.select("#statefilter").property("value");
  var inputState = inputElement.toString();  
  var filterData = tableData.filter(ufo => ufo.state === inputState)

  //code for city select
  var inputElement = d3.select("#countryfilter").property("value");
  var inputCountry = inputElement.toString();  
  var filterData = tableData.filter(ufo => ufo.country === inputCountry)

  //code for shape select
  var inputElement = d3.select("#shapefilter").property("value");
  var inputShape = inputElement.toString();  
  var filterData = tableData.filter(ufo => ufo.shape === inputShape)


    clear_ufo_table();

    // populate table with filtered data
    filterData.forEach((ufo) => {
        var ufo_row = ufo_tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var ufo_cell = ufo_row.append("td");
          ufo_cell.text(value);
        });
      });
  }
});
  

