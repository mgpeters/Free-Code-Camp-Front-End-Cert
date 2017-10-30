$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0;
		jsonAPI = [];

		function getData(user){
			$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data){
				jsonAPI.push(data);
			})
		}
		
		function newUser(nUser){
			users.push(nUser);
			getData(nUser);
		}

		for (x; x < users.length; x += 1){
				getData(users[x]);
			}
		console.log(jsonAPI);

 })

