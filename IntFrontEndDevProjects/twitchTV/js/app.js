$(document).foundation()
$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		jsonAPI = [],
		y = 0;

			for(y; y < users.length; y += 1){
			jsonAPI.push($.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + users[y] + '?callback=?', function(data){
				console.log("success!! - " + data);}))
			}
		console.log(jsonAPI);
})