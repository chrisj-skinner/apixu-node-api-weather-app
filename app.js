var weather = require("./modules/weather");
var locations = process.argv.slice(2);

locations.forEach( function(location){
	weather.get(location);
});