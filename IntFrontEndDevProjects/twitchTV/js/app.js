$(document).foundation()

function getData(user){
		return $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data){
	}
}

$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		jsonAPI = [],
		y = 0;

		for(y;y > users.length; y += 1){
			getData(users[y])
		}
		console.log(jsonAPI);
})