$(document).foundation()
$(document).ready(function(){
	var latit,
		longit;

	function showPosition(position){
  		latit = position.coords.latitude.toFixed(4);
  		longit = position.coords.longitude.toFixed(4);

  		loadWeather(); //Calls AJAX when I want!
	}
	function loadWeather(){
		$.ajax( {
			url: 'https://fcc-weather-api.glitch.me/api/current?lat=' + latit + '&lon=' + longit,
	      	success: function(data) {
	      		// variables to dump JSON API data in
	      		var weatherTemp = data.main.temp,
	      			weatherMain = data.weather[0].main,
	      			weatherIcon = data.weather[0].icon,
	      			weatherCountry = data.sys.country,
	      			weatherCity = data.name;

	      		//Changes background depending on weatherDesc string
	      			switch(weatherMain){
	      				case "Clear":
	      					$("body").css("background-image", "url(../img/clear.jpeg");
	      					break;
	      				case "Mist":
	      					$("body").css("background-image", "url(../img/cloudy.jpeg");
	      					break;
	      				case "Clouds":
	      					$("body").css("background-image", "url(../img/cloudy2.jpeg");
	      					break;
	      				case "Rain":
	      					$("body").css("background-image", "url(../img/rain.jpg)");
	      					break;
	      			}
	      			
	      		// calls to manipulate the DOM
		        	$('#weather-temp').html(weatherTemp);
		        	$('#weather-main').html(weatherMain);
		        	$('#weather-icon').html('<img src="' + weatherIcon + '"></img>');
		        	$('#weather-country').html(weatherCity + " - " + weatherCountry);
		      		},
	      		cache: false
	    	});
		}
		// Geolocation for AJAX call
	if ("geolocation" in navigator) {
  		navigator.geolocation.getCurrentPosition(showPosition);
		} 
	else {
 		alert("GeoLocation Not Available");
		}
		
});