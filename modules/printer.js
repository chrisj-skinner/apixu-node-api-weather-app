// Display report
function printReport(location, condition, tempQuote, temp_c){
	message = "The current weather report for " + location + " is " + condition + "and a " + tempQuote + " " + temp_c + " degrees C.";

	console.log('\n' + message);
};

// Display error
function printError(error, location){
	if (error.code == 1006) {
		error.message = error.message.replace('.', '');
		message = error.message + " for '" + location + "'.\nCheck the location was entered correctly.";
	} else {
		message = "There was a problem with the connection. (" + error.message + ")";

	};
	console.error('\n' + message);
};

module.exports.printReport = printReport;
module.exports.printError = printError;