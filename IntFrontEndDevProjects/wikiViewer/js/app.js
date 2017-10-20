$(document).foundation()
$(document).ready(function(){
	//$().on('click', function(){
	  $.ajax( {
	  	dataType: 'json',
		url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=futon&prop=info&origin=*&inprop=url&utf8=&format=json',
      	success: function(data) {
      		console.log(data.query.search[1].title);
        	var title = [],
        		snippet = [],
        		pageUrl = [],
        		rounds = data.query.search.length;
        		for (x = 0; x < rounds; x++ ){
        			title.push(data.query.search[x].title);
        			snippet.push(data.query.search[x].snippet);
        			pageUrl.push('https://en.wikipedia.org/wiki/' + title[x]);
        		}
        		console.log(title);
        		console.log(snippet);
        		console.log(pageUrl);
      		},
      	error: alert("There's an error on the page"),
      	cache: false
    	});
	//})  

})