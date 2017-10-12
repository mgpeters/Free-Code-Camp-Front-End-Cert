$(document).foundation()
$(document).ready(function(){
	var latit,
		longit,
		c = true, //for C to F temp conversion below;
		weatherTempF; //to make sure the regular weatherTemp is not influenced

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
		        	$('#weather-temp').html(weatherTemp + ' <button class="temp-convert">C</button>');
		        	$('#weather-main').html(weatherMain);
		        	$('#weather-icon').html('<img src="' + weatherIcon + '"></img>');
		        	$('#weather-country').html(weatherCity + " - " + weatherCountry);

		        	//button click to change C to F
		        	$(document).on('click', '.temp-convert', function(){
		        		if (c){
		        			weatherTempF = weatherTemp.toFixed(0)  * 9/5 + 32;
		        			$('#weather-temp').html(weatherTempF + ' <button class="temp-convert">F</button>');
		        			c = false;
		        		}
		        		else {
		        			$('#weather-temp').html(weatherTemp + ' <button class="temp-convert">C</button>');
		        			c = true;
		        		}
		        	})
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