$(document).foundation()
$(document).ready(function(){
	$.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp?', function(data){
		console.log(data);
	})
})