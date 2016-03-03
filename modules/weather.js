var http = require("http");
var printer = require("./printer");
var quotes = require("./quotes");
var messages = "";

function get(location){
	
	try {
	// Connect to the API
	var request = http.get("http://api.apixu.com/v1/current.json?key=0f36617e3b0942098e9121243160303&q=" + location, function(response){
		var body = "";

		// Read the data
		response.on("data", function(chunk) {
			body += chunk;
		});

		response.on("end", function(){

			// Parse the data
			body = JSON.parse(body);

			// In the event of an error. The body returns an array with a value of error - check for this.
			if (!body.error){
				
				// Get weather quotes
				quotes.getQuotes(body.current.temp_c, body.current.wind_mph);

				// Print data
				printer.printReport(body.location.name, body.current.condition.text, tempQuote, body.current.temp_c);

			} else {

				// Print error
				printer.printError(body.error, location);	

			}
		});
	});
	} catch(error) {
		// Connection error
		printError(error);	
	}
}

module.exports.get = get;

