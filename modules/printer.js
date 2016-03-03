// Display report
function printReport(location, condition, tempQuote, temp_c){
	message = "It's " + condition + " in " + location + " right now and " + tempQuote + " " + temp_c + " deg C!";
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