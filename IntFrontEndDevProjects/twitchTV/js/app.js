$(document).foundation()
$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		jsonAIP = [];

	$.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?', function(data){
		users.push(data);
	console.log(users);
})