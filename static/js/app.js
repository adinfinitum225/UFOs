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
			cell.text(val);
		});
	});
};

function handleClick() {
	// Grab the datetime from the filter input
	let date = d3.select("#datetime").property("value");
	let filteredData = tableData;

	// Filter the data by date if a date was entered
	if (date) {
		filteredData = filterdData.filter(row => row.datetime === date);
	};
	
	// Build our table using the filtered data
	buildTable(filteredData);
};


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
