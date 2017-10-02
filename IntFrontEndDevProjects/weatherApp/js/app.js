$(document).foundation()
$(document).ready(function(){
	  $.ajax( {
		url: 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139',
      	success: function(data) {
      		console.log(data);
      		var weatherTemp = data.main.temp,
      			weatherMain = data.weather[0].main,
      			weatherDesc = data.weather[0].description,
      			weatherIcon = data.weather[0].icon;
      			console.log(weatherTemp);

	        	/*$('#quote-title').html(title);
	        	$('#quote-content').html(quote);*/
	      		},
      		cache: false
    	});
});