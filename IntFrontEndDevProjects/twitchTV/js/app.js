$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0;
		jsonAPI = [];

		for (x; x < users.length; x += 1){
			$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + users[x] + '?callback=?', function(data){
				jsonAPI.push(data);
			})
		}
		console.log(jsonAPI);

 })

