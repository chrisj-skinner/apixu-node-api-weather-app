var http = require("http");
var https = require("https");
var printer = require("./printer");
var date = new Date(milliseconds);

function getProfile(username){

	// Connect to API
	var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
		var body = "";
		// Read the data
		response.on('data', (chunk) => {
			body+= chunk;
		});
		response.on('end', function(){
			if (response.statusCode === 200) {
				try {
					// Parse the data
					var profile = JSON.parse(body);
					// Print the data
					printer.printMessage(username, profile.badges.length, profile.points.JavaScript);
				} catch(error) {
					// Parse Error
					printer.printError(error);
				}
			} else {
				// Status code error
				printer.printError({message: "There was an error getting the profile for " + username + ". (" +  http.STATUS_CODES[response.statusCode] + ")"});
			}
			
		})
	});

	// Connection Error
	request.on("error", printer.printError);
}

module.exports.get = getProfile;