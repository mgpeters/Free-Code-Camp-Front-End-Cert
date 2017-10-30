$(document).foundation()

function getData(user){
	 $.ajax({
    		url: 'https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?',
    		async: true,
    		dataType: "json", 
    		success: function(data){
    			console.log(data)
        		jsonAPI.push(data);
     		}
	});
};

$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
		y = 0,
		jsonAPI = new Array();
      console.log(typeof jsonAPI);
		getData(users[0]);
		console.log(jsonAPI);

})