$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0,
		y = 0,
		userData = [],
		userObject = {};

		function getUserData(user){
			$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data){
				var id = data.display_name
				userObject[id] = data;
				getUserStatus(user);
			})
		}

		function getUserStatus(user){
			$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(data){
				console.log(data);
				if (data.stream == undefined){
					console.log("data.stream for " + user + " is undefined");
				}
				userObject[user].stream = data.stream;

			})
		}

		function newUser(nUser){
			users.push(nUser);
			getUserData(nUser);
		}

		for (x; x < users.length; x += 1){
				getUserData(users[x]);
			}
		/*for (y; y < users.length; y += 1){
				getUserStatus(users[y]);
			}*/

		console.log(userData);
		console.log(userObject);


 })

