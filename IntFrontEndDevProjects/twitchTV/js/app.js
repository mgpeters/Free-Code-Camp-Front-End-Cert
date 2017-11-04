$(document).foundation()


$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		x = 0,
		userObject = {};

		function getUserData(user){ //gets the bulk of the api data I want to play around with
			$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data){
				var id = data.display_name
				userObject[id] = JSON.parse(JSON.stringify(data));
				getUserStatus(user);
				console.log(data);
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

		function objectTest(data){
			console.log(userObject); //checks to see if my object is doing what I want
			console.log(Object.keys(userObject));
			console.log(JSON.stringify(userObject));
			return data;
		}

		for (x; x < users.length; x += 1){ // Loops over every name in the users array
				getUserData(users[x]);
				/*let userKey = users[x];
				console.log(userKey);
				console.log(userObject[userKey].stream);
				$('#user-div')
        		.append('<div class="user-result-cell"><a href="' + userObject[userKey]._links.self + '">' + userObject[usersKey].display_name + '</a><br/><h6>' + userObject[userKey].bio + '</h6></div>')
			*/
			}
		
		setTimeout(objectTest(userObject), 10);
 })

