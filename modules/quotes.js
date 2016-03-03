var quote = "";
var quotes = {
		wind: [
			"a remarkably pleasant",
			"a rather blustery"
		],
		temp: [
			"a frightfully cold",
			"an awfuly sweltering"
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
	if (wind > 14) {
		windQuote = quotes.wind[0] 
	} else {
		windQuote = quotes.wind[1];
	}

	return tempQuote;
	return windQuote;
}

module.exports.getQuotes = getQuotes
