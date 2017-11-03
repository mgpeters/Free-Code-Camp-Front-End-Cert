$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0,
		userObject = {};

		function getUserData(user){ //gets the bulk of the api data I want to play around with
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

		for (x; x < users.length; x += 1){ // Loops over every name in the users array
				getUserData(users[x]);
				$('#user-div')
        			.append('<div class="user-result-cell"><a href="' + pageUrl[y] + '">' + title[y] + '</a><br/>' + snippet[y] + '</div>')
			}
		console.log(userObject); //checks to see if my object is doing what I want
 })

