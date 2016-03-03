var quote = "";
var quotes = {
		wind: [
			"remarkably pleasant",
			"rather blustery"
		],
		temp: [
			"A frightfully cold",
			"An awfuly sweltering"
		]
	};

function getQuotes(temp, wind){

	// Temperature quote
	if (temp > 14) {
		tempQuote = quotes.temp[0] 
	} else {
		tempQuote = quotes.temp[1];
	}

	// Wind quote
	if (wind > 10) {
		windQuote = quotes.wind[0] 
	} else {
		windQuote = quotes.wind[1];
	}

	return tempQuote;
	return windQuote;
}

module.exports.getQuotes = getQuotes
