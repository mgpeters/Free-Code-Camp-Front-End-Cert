$(document).foundation()
$(document).ready(function(){
	  $.ajax( {
		url: 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139',
      	success: function(data) {
      		// variables to dump JSON API data in
      		var weatherTemp = data.main.temp,
      			weatherMain = data.weather[0].main,
      			weatherDesc = data.weather[0].description,
      			weatherIcon = data.weather[0].icon;
      			weatherCountry = data.sys.country,
      			weatherCity = data.name;
      		// calls to manipulate the DOM
	        	$('#weather-temp').html(weatherTemp);
	        	$('#weather-main').html(weatherMain + " - " + weatherDesc);
	        	$('#weather-icon').html('<img src="' + weatherIcon + '" ></img>');
	        	$('#weather-country').html(weatherCity + " - " + weatherCountry);
	      		},
      		cache: false
    	});
});