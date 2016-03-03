var profile = require("./modules/profile");
var users = process.argv.slice(2);

users.forEach(function(username){
	profile.get(username);
});