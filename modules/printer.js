// Display report
function printReport(location, condition, tempQuote, windQuote, temp_c, wind_mph){
	message = tempQuote + " " + temp_c + " deg C in " + location + " right now, " + condition.toLowerCase() + " and " + windQuote + " with " + wind_mph + " mph of wind.";
	console.log('\n' + message);
};

// Display error
function printError(error, location){
	if (error.code == 1006) {
		error.message = error.message.replace('.', '');
		message = error.message + " for '" + location + "'.\nCome on - check that spelling...";
	} else {
		message = "There was a problem with the connection. (" + error.message + ")";

	};
	console.error('\n' + message);
};

module.exports.printReport = printReport;
module.exports.printError = printError;