// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// Create our table
function buildTable(data) {

	// Clear out any existing table data
	tbody.html("");

	// Loop through each object in the data and create table
	data.forEach((dataRow) => {
		// Append a row to the table
		let row = tbody.append("tr");
		// Add each value to its own cell
		Object.values(dataRow).forEach((val => {
			let cell = row.append("td");
			cell.text(val)
		});
	});
}
