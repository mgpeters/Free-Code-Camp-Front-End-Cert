$(document).foundation()
$(document).ready(function(){
	//$().on('click', function(){
	  $.ajax( {
	  	dataType: 'json',
		url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=futon&prop=info&origin=*&inprop=url&utf8=&format=json',
      	success: function(data) {
        	var title = [],
        		snippet = [],
        		pageUrl = [],
        		rounds = data.query.search.length,
        		x = 0,
        		y = 0;

        		for (x; x < rounds; x += 1){
        			title.push(data.query.search[x].title);
        			snippet.push(data.query.search[x].snippet);
        			pageUrl.push('https://en.wikipedia.org/wiki/' + title[x]);
        		}
        		for (y; y < rounds; y += 1){
        			$('.search-results').append("<div>Test</div>")
        		}
      		},
      	//error: alert("There's an error on the page"),
      	cache: false
    	});
	//})  

})