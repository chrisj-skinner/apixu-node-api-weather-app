// Print out message
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript." + date;
	console.log(message);
}

// Print out error message
function printError(error){
	console.error(error.message);
};

module.exports.printMessage = printMessage;
module.exports.printError = printError;