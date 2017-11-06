$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0,
		userObject = {};

		function getUserData(user){ //gets the bulk of the api data I want to play around with
			$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data){
				var id = data.display_name;
					userObject[id] = JSON.parse(JSON.stringify(data)),
					name = data.name,
					bio = data.bio,
					logo = data.logo,
					links = "http://go.twitch.tv/" + name,
					status = "";

					getUserStatus(user);
					parseUser();
			})
		}

		function getUserStatus(user){ //needed to band-aid the async problem and to add the steam status
			$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(data){
				userObject[user].status = data.stream;
				status = data.status;
			})
		}

		function parseUser(){
			$('#user-div')
        		.append('<div class="user-result-cell"><a href="' + links + '">' + name + '</a><br/><h6>' + bio + '</h6></div>')
		}

		function newUser(nUser){ //made but not implemented yet.
			users.push(nUser);
			getUserData(nUser);
		}

		function objectTest(data){
			console.log(userObject); //checks to see if my object is doing what I want
			console.log(Object.keys(userObject));
		}

		for (x; x < users.length; x += 1){ // Loops over every name in the users array, creating my userObject
				getUserData(users[x]);
			}

		setTimeout(function(){
			objectTest(userObject);
		}, 1500)
 })

