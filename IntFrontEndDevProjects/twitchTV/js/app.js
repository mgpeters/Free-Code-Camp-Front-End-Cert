$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0;
		userData = [],
		userObject = {};

		function getUserData(user){
			$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data){
				var id = data.display_name
				userObject[id] = data;
				userData.push(data);
			})
			/*$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(data){
				userData.push(data);
			})*/
		}

		/*function getUserStatus(user){
			$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(data){
				userStatus.push(data);
			})
		}

		function newUser(nUser){
			users.push(nUser);
			getUserData(nUser);
		}*/

		for (x; x < users.length; x += 1){
				getUserData(users[x]);
			}

		console.log(userData);
		console.log(userObject);
 })

