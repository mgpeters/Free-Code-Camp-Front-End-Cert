$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0,
		userData = [],
		userObject = {};

		function getUserData(user){ //gets the bulk of the api data I want to play aroundd with
			$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data){
				var id = data.display_name
				userObject[id] = data;
				getUserStatus(user);
			})
		}

		function getUserStatus(user){ //needed to band-aid the async problem and to add the steam status
			$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(data){
				userObject[user].stream = data.stream;
			})
		}

		function newUser(nUser){ //made but not implemented yet.
			users.push(nUser);
			getUserData(nUser);
		}

		for (x; x < users.length; x += 1){
				getUserData(users[x]);
			}

		console.log(userData);
		console.log(userObject);


 })

