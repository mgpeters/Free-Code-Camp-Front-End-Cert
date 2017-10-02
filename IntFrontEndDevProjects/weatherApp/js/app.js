$(document).foundation()
$(document).ready(function(){
	  $.ajax( {
		url: 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139',
      	success: function(data) {
      		var weatherTemp = data.main.temp,
      			weatherMain = data.weather[0].main,
      			weatherDesc = data.weather[0].description,
      			weatherIcon = data.weather[0].icon;
      			weatherCountry = data.sys.country,
      			weatherCity = data.name;
      			console.log(weatherTemp);
      			console.log(weatherMain);
      			console.log(weatherDesc);
      			console.log(weatherIcon);
      			console.log(weatherCountry);
      			console.log(weatherCity);

	        	$('#temp').html(weatherTemp);
	        	/*$('#quote-content').html(quote);*/
	      		},
      		cache: false
    	});
});