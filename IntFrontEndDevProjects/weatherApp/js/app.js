$(document).foundation()
$(document).ready(function(){
	  e.preventDefault();
	  $.ajax( {
		url: 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139',
      	success: function(data) {
      		var post = data.shift()
	        	$('#quote-title').html(title);
	        	$('#quote-content').html(quote);
	      		},
      		cache: false
    	});
});