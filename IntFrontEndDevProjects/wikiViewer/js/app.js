$(document).foundation()

function clearBox(elementID){	//function to clear html made by search
    document.getElementById(elementID).innerHTML = "";
}

$(document).ready(function(){

	var repeat = false;

	$(".searchButton").on('click', function(){
		var searchTerm = document.getElementsByName("search")[0].value,
			rounds,
			z = 0;

        	while(repeat){
        		for (z; z < rounds; z += 1){
        			$('.search-results').prepend('<div class="search-cell"></div>')
        			} //* WORK ON THIS !! BUGGY
        		repeat = false;
        	}
	//Ajax call for the search click

	  $.ajax( {
	  	dataType: 'json',
		url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchTerm + '&prop=info&origin=*&inprop=url&utf8=&format=json',
      	success: function(data) {
      		console.log("Ajax OK")
        	var title = [],
        		snippet = [],
        		pageUrl = [],
        		x = 0,
        		y = 0,
        		rounds = data.query.search.length;

        		for (x; x < rounds; x += 1){
        			title.push(data.query.search[x].title);
        			snippet.push(data.query.search[x].snippet);
        			pageUrl.push('https://en.wikipedia.org/wiki/' + title[x]);
        		}
        		for (y; y < rounds; y += 1){
        			$('.search-results')
        			.append('<div class="search-cell"><a href="' + pageUrl[y] + '">' + title[y] + '</a><br/>' + snippet[y] + '</div>')
        		}
        		repeat = true;
	 		},
      	//error: alert("There's an error on the page"),
      	cache: false
    	});
	})  
})